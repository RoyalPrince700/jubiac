const FoodMenuModel = require('../../models/vendorMenu');

const getFoodMenuController = async (req, res) => {
    const { vendorId } = req.query;
    if (!vendorId) return res.status(400).send('Vendor ID is required.');

    try {
        const menu = await FoodMenuModel.find({ vendorId });
        res.json({ success: true, menu });
    } catch (error) {
        res.status(500).json({ success: false, message: 'Server Error', error });
    }
};

module.exports = getFoodMenuController;
