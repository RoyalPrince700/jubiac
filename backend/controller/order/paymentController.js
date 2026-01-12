const flw = require('../../config/flutterwave')
const userModel = require('../../models/userModel')

const paymentController = async(request,response)=>{

        try{
            const { cartItems, shippingDetails } = request.body

            const user = await userModel.findOne({_id : request.userId})

            // Calculate total amount
            const totalAmount = cartItems.reduce((sum, item) => {
                return sum + (item.productId.sellingPrice * item.quantity)
            }, 0)

            // Prepare payment payload for Flutterwave
            const payload = {
                tx_ref: `jubiac-${Date.now()}-${request.userId}`,
                amount: totalAmount,
                currency: 'NGN',
                redirect_url: `${process.env.FRONTEND_URL}/success`,
                payment_options: 'card,account,ussd,banktransfer',
                customer: {
                    email: user.email,
                    name: shippingDetails?.name || user.name || user.email,
                    phone_number: shippingDetails?.number || user.number || ''
                },
                customizations: {
                    title: 'Jubiac Payment',
                    description: `Payment for ${cartItems.length} item(s)`,
                    logo: process.env.FRONTEND_URL + '/logo.png'
                },
                meta: {
                    userId: request.userId.toString(),
                    name: shippingDetails?.name,
                    number: shippingDetails?.number,
                    address: shippingDetails?.address,
                    note: shippingDetails?.note || '',
                    cartItems: JSON.stringify(cartItems.map(item => ({
                        productId: item.productId._id.toString(),
                        productName: item.productId.productName,
                        quantity: item.quantity,
                        price: item.productId.sellingPrice
                    })))
                }
            }

            let response_data;
            try {
                console.log('Attempting to initiate Flutterwave payment...');
                
                const flutterwaveResponse = await fetch('https://api.flutterwave.com/v3/payments', {
                    method: 'POST',
                    headers: {
                        Authorization: `Bearer ${process.env.FLUTTERWAVE_SECRET_KEY}`,
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(payload)
                });

                response_data = await flutterwaveResponse.json();
                console.log('Flutterwave response:', response_data);
            } catch (error) {
                console.error('Flutterwave API error:', error);
                throw new Error(`Flutterwave payment initiation failed: ${error.message}`);
            }

            if(response_data.status === 'success'){
                response.status(200).json({
                    success: true,
                    data: {
                        link: response_data.data.link,
                        tx_ref: payload.tx_ref
                    }
                })
            } else {
                throw new Error(response_data.message || 'Failed to initialize payment')
            }
        }catch(error){
            response.json({
                message : error.message || error,
                error : true,
                success : false
            })
        }
}

module.exports = paymentController