const flw = require('../../config/flutterwave')
const addToCartModel = require('../../models/cartProduct')
const orderModel = require('../../models/orderProductModel')

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