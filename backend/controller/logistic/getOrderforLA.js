const Checkout = require('../../models/checkoutModel'); // Import checkout model

const getOrderForLA = async (req, res) => {
    try {
        const userId = req.userId; // Logistics Associate ID (should not destructure here)

        const assignedOrders = await Checkout.find({ assignedTo: userId })
            .populate('cartItems.productId', 'productName productImage')
            .select('-__v');

        if (!assignedOrders.length) {
            return res.status(404).json({
                success: false,
                message: "No orders assigned to you.",
            });
        }

        res.status(200).json({ success: true, data: assignedOrders });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = getOrderForLA;
