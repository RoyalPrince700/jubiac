const orderModel = require("../../models/checkoutModel");

const allOrdersController = async (req, res) => {
    try {
        const allOrders = await orderModel
        .find({}) // Fetch all orders regardless of status or assignment
        .sort({ createdAt: -1 })
        .populate("cartItems.productId", "productName productImage sellingPrice")
        .populate("userId", "name email address number");
      

        // Debugging: Log orders to verify fields
        console.log("Fetched Orders:", JSON.stringify(allOrders, null, 2));

        // Respond with the fetched orders
        res.json({
            data: allOrders,
            message: "All Orders",
            success: true,
            error: false,
        });
    } catch (error) {
        console.error("Error in allOrdersController:", error);

        // Send error response
        res.status(500).json({
            message: error.message || "An unexpected error occurred.",
            success: false,
            error: true,
        });
    }
};

module.exports = allOrdersController;