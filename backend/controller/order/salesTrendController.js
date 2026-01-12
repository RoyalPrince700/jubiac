const orderModel = require("../../models/checkoutModel");

const salesTrendController = async (req, res) => {
    try {
        // Aggregate sales data by month
        const salesData = await orderModel.aggregate([
            {
                $group: {
                    _id: { $month: "$createdAt" }, // Group by the month of the createdAt field
                    totalSales: { $sum: "$totalPrice" }, // Sum the total sales for each month
                },
            },
            {
                $project: {
                    month: "$_id", // Rename _id to month
                    sales: "$totalSales", // Rename totalSales to sales
                    _id: 0, // Exclude the _id field from the result
                },
            },
            {
                $sort: { month: 1 }, // Sort the months in ascending order (1-12)
            },
        ]);

        // Map months to names (if needed)
        const monthNames = [
            "Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec",
        ];

        const formattedData = salesData.map((entry) => ({
            month: monthNames[entry.month - 1], // Convert month number to month name
            sales: entry.sales,
        }));

        res.json({
            success: true,
            data: formattedData,
            message: "Sales trend data fetched successfully.",
            error: false,
        });
    } catch (error) {
        console.error("Error in salesTrendController:", error);
        res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch sales trend data.",
            error: true,
        });
    }
};

module.exports = salesTrendController;
