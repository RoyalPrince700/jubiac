const productModel = require("../../models/productModel")

const { Types: { ObjectId } } = require('mongoose');

const deleteProductController = async (req, res) => {
    try {
        const { _id } = req.body;

        // Validate the _id
        if (!_id || !ObjectId.isValid(_id)) {
            return res.status(400).json({
                message: "Invalid product ID",
                error: true,
                success: false,
            });
        }

        // Use `new ObjectId(_id)`
        const deleteProduct = await productModel.deleteOne({ _id: new ObjectId(_id) });

        if (deleteProduct.deletedCount > 0) {
            res.status(200).json({
                message: "Product Deleted from List",
                error: false,
                success: true,
            });
        } else {
            res.status(404).json({
                message: "Product not found",
                error: true,
                success: false,
            });
        }
    } catch (err) {
        res.status(500).json({
            message: err.message || "Internal Server Error",
            error: true,
            success: false,
        });
    }
};



module.exports = deleteProductController