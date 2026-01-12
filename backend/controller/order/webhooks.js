const flw = require('../../config/flutterwave')
const addToCartModel = require('../../models/cartProduct')
const orderModel = require('../../models/orderProductModel')
const UserModel = require('../../models/userModel')
const { sendPaymentSuccessEmail, sendPaymentSuccessNotificationToAdmin } = require('../../mailtrap/emails')

const secretHash = process.env.FLUTTERWAVE_SECRET_HASH

const webhooks = async(request,response)=>{

    const signature = request.headers['verif-hash'];

    // Verify webhook signature
    if (!signature || signature !== secretHash) {
        response.status(401).send('Unauthorized');
        return;
    }

    const payload = request.body;

    try{
        // Verify transaction with Flutterwave
        const transactionId = payload.data?.id;
        
        if (!transactionId) {
            response.status(400).send('Invalid payload');
            return;
        }

        // Verify transaction details from Flutterwave
        const verifyResponse = await flw.Transaction.verify({ id: transactionId });

        if (verifyResponse.status === 'success' && verifyResponse.data.status === 'successful') {
            const transactionData = verifyResponse.data;
            const meta = payload.data?.meta || {};

            // Parse cart items from meta
            let productDetails = [];
            if (meta.cartItems) {
                try {
                    const cartItems = JSON.parse(meta.cartItems);
                    productDetails = cartItems.map(item => ({
                        productId: item.productId,
                        name: item.productName,
                        price: item.price,
                        quantity: item.quantity
                    }));
                } catch (err) {
                    console.error('Error parsing cartItems:', err);
                }
            }

            const orderDetails = {
                productDetails: productDetails,
                email: transactionData.customer?.email || payload.data?.customer?.email,
                userId: meta.userId || transactionData.meta?.userId,
                paymentDetails: {
                    paymentId: transactionData.id || transactionId,
                    payment_method_type: transactionData.payment_type || 'card',
                    payment_status: transactionData.status || 'successful',
                },
                shipping_options: [],
                totalAmount: transactionData.amount || payload.data?.amount
            }

            const order = await new orderModel(orderDetails)
            const saveOrder = await order.save()

            if(saveOrder?._id && meta.userId){
                const deleteCartItem = await addToCartModel.deleteMany({userId: meta.userId})
            }

            // Send payment success emails
            try {
                const paymentData = {
                    transactionId: transactionData.id.toString(),
                    paymentMethod: transactionData.payment_type || 'card',
                    amount: transactionData.amount || payload.data?.amount,
                    paymentDate: new Date().toLocaleString(),
                    orderId: saveOrder._id,
                    customerEmail: transactionData.customer?.email || payload.data?.customer?.email,
                    itemCount: productDetails.length
                };

                console.log('[webhooks] preparing email sends', {
                    userId: meta.userId,
                    customerEmail: paymentData.customerEmail,
                    adminEmail: process.env.ADMIN_NOTIFICATION_EMAIL,
                    itemCount: paymentData.itemCount,
                });

                // Send email to user if userId exists
                if (meta.userId) {
                    const user = await UserModel.findById(meta.userId);
                    console.log('[webhooks] user lookup', { userId: meta.userId, userEmail: user?.email });
                    if (user && user.email) {
                        await sendPaymentSuccessEmail(user.email, paymentData);
                    } else {
                        console.log('[webhooks] user email missing, skipping user email');
                    }
                } else {
                    console.log('[webhooks] userId missing, skipping user email');
                }

                // Send notification to admin
                await sendPaymentSuccessNotificationToAdmin(paymentData);

            } catch (emailError) {
                console.error('Error sending payment success emails from webhook:', emailError);
                // Don't throw error - payment was successful
            }

            response.status(200).json({
                success: true,
                message: 'Webhook processed successfully'
            });
        } else {
            response.status(400).json({
                success: false,
                message: 'Transaction verification failed'
            });
        }
    }catch(err){
        console.error('Webhook Error:', err);
        response.status(400).send(`webhook Error: ${err.message}`);
    }
}

module.exports = webhooks