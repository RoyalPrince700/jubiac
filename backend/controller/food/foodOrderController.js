const FoodOrder = require('../../models/foodOrder');

// Place a food order
const placeFoodOrder = async (req, res) => {
    try {
        const { vendorId, items } = req.body;
        const userId = req.user._id;

        if (!vendorId || !items || items.length === 0) {
            throw new Error('Vendor ID and items are required.');
        }

        const totalAmount = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

        const newOrder = new FoodOrder({
            vendorId,
            userId,
            items,
            totalAmount
        });

        const savedOrder = await newOrder.save();

        res.status(201).json({
            success: true,
            message: 'Order placed successfully.',
            data: savedOrder
        });
    } catch (err) {
        res.status(400).json({
            success: false,
            message: err.message || 'Failed to place order.',
        });
    }
};

module.exports =  placeFoodOrder ;
