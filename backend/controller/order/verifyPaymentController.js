const flw = require('../../config/flutterwave');
const orderModel = require('../../models/orderProductModel');
const checkoutModel = require('../../models/checkoutModel');
const addToCartModel = require('../../models/cartProduct');
const UserModel = require('../../models/userModel');
const { sendPaymentSuccessEmail, sendPaymentSuccessNotificationToAdmin } = require('../../mailtrap/emails');

const verifyPaymentController = async (request, response) => {
    try {
        const { transaction_id } = request.body;

        if (!transaction_id) {
            return response.status(400).json({
                message: "Transaction ID is required",
                success: false,
                error: true
            });
        }

        // Check if checkout already exists with this paymentId
        const existingCheckout = await checkoutModel.findOne({ "paymentDetails.paymentId": transaction_id });
        if (existingCheckout) {
            return response.json({
                message: "Order already processed",
                success: true,
                data: existingCheckout
            });
        }

        // Verify transaction with Flutterwave
        const verifyResponse = await flw.Transaction.verify({ id: transaction_id });

        if (verifyResponse.status === 'success' && verifyResponse.data.status === 'successful') {
            const transactionData = verifyResponse.data;
            const meta = transactionData.meta || {};

            // Parse cart items from meta
            let cartItemsForCheckout = [];
            if (meta.cartItems) {
                try {
                    const parsedCartItems = JSON.parse(meta.cartItems);
                    cartItemsForCheckout = parsedCartItems.map(item => ({
                        productId: item.productId,
                        quantity: item.quantity
                    }));
                } catch (err) {
                    console.error('Error parsing cartItems:', err);
                }
            }

            // Create entry in checkoutModel (This is what shows on the /order page)
            const checkoutData = {
                name: meta.name || transactionData.customer?.name,
                number: meta.number || transactionData.customer?.phone_number,
                address: meta.address || 'N/A',
                note: meta.note || '',
                cartItems: cartItemsForCheckout,
                totalPrice: transactionData.amount,
                paymentMethod: 'Flutterwave Card',
                status: 'Paid',
                userId: meta.userId || request.userId,
                paymentDetails: {
                    paymentId: transactionData.id.toString(),
                    payment_method_type: transactionData.payment_type || 'card',
                    payment_status: transactionData.status || 'successful',
                }
            };

            const newCheckout = new checkoutModel(checkoutData);
            const savedCheckout = await newCheckout.save();

            // Also create entry in orderModel for legacy/backup
            const orderDetails = {
                productDetails: cartItemsForCheckout, // Use same items
                email: transactionData.customer?.email,
                userId: meta.userId || request.userId,
                paymentDetails: checkoutData.paymentDetails,
                shipping_options: [],
                totalAmount: transactionData.amount
            };

            const order = new orderModel(orderDetails);
            await order.save();

            if (savedCheckout?._id && (meta.userId || request.userId)) {
                await addToCartModel.deleteMany({ userId: meta.userId || request.userId });
            }

            // Send payment success emails
            try {
                const userId = meta.userId || request.userId;
                const paymentData = {
                    transactionId: transactionData.id.toString(),
                    paymentMethod: 'Flutterwave Card',
                    amount: transactionData.amount,
                    paymentDate: new Date().toLocaleString(),
                    orderId: savedCheckout._id,
                    customerEmail: transactionData.customer?.email,
                    itemCount: cartItemsForCheckout.length
                };

                console.log('[verifyPaymentController] preparing email sends', {
                    userId,
                    customerEmail: paymentData.customerEmail,
                    adminEmail: process.env.ADMIN_NOTIFICATION_EMAIL,
                    itemCount: paymentData.itemCount,
                });

                // Send email to user if userId exists
                if (userId) {
                    const user = await UserModel.findById(userId);
                    console.log('[verifyPaymentController] user lookup', { userId, userEmail: user?.email });
                    if (user && user.email) {
                        await sendPaymentSuccessEmail(user.email, paymentData);
                    } else {
                        console.log('[verifyPaymentController] user email missing, skipping user email');
                    }
                } else {
                    console.log('[verifyPaymentController] userId missing, skipping user email');
                }

                // Send notification to admin
                await sendPaymentSuccessNotificationToAdmin(paymentData);

            } catch (emailError) {
                console.error('Error sending payment success emails:', emailError);
                // Don't throw error - payment was successful
            }

            return response.status(200).json({
                success: true,
                message: 'Order placed successfully',
                data: savedCheckout
            });
        } else {
            return response.status(400).json({
                success: false,
                message: 'Payment verification failed'
            });
        }
    } catch (error) {
        console.error('Verify Payment Error:', error);
        response.status(500).json({
            message: error.message || error,
            error: true,
            success: false
        });
    }
};

module.exports = verifyPaymentController;
