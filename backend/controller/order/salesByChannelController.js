const orderModel = require("../../models/checkoutModel");

const salesByChannelController = async (req, res) => {
    try {
        // Aggregate sales data by channel
        const salesData = await orderModel.aggregate([
            {
                $group: {
                    _id: "$salesChannel", // Assuming "salesChannel" is a field in the order schema
                    totalSales: { $sum: "$totalPrice" }, // Sum the total sales for each channel
                    count: { $sum: 1 }, // Count the number of orders per channel
                },
            },
            {
                $project: {
                    name: "$_id", // Rename _id to name
                    value: "$totalSales", // Rename totalSales to value for easier frontend handling
                    count: 1, // Include the count of orders
                    _id: 0, // Exclude the _id field from the result
                },
            },
            {
                $sort: { value: -1 }, // Sort channels by total sales (highest to lowest)
            },
        ]);

        res.json({
            success: true,
            data: salesData,
            message: "Sales by channel data fetched successfully.",
            error: false,
        });
    } catch (error) {
        console.error("Error in salesByChannelController:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch sales by channel data.",
            error: true,
        });
    }
};

module.exports = salesByChannelController;
