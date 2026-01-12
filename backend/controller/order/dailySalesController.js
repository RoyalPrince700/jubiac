const orderModel = require("../../models/checkoutModel");
const moment = require("moment");

const dailySalesController = async (req, res) => {
    try {
        // Define the start and end of the current week
        const startDate = moment().startOf("week").toDate(); // Beginning of the week (Sunday)
        const endDate = moment().endOf("week").toDate(); // End of the week (Saturday)

        // Aggregate daily sales
        const salesData = await orderModel.aggregate([
            {
                $match: {
                    createdAt: { $gte: startDate, $lte: endDate }, // Filter orders within this week
                },
            },
            {
                $group: {
                    _id: { $dayOfWeek: "$createdAt" }, // Group by the day of the week (1 = Sunday, 7 = Saturday)
                    totalSales: { $sum: "$totalPrice" }, // Sum totalPrice for each group
                },
            },
            {
                $sort: { _id: 1 }, // Sort by day of the week
            },
        ]);

        // Map MongoDB results to include all days of the week
        const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const formattedData = daysOfWeek.map((day, index) => {
            const dayData = salesData.find((item) => item._id - 1 === index);
            return {
                name: day,
                sales: dayData ? dayData.totalSales : 0, // Default to 0 if no sales
            };
        });

        res.json({
            success: true,
            data: formattedData,
            message: "Daily sales data fetched successfully.",
            error: false,
        });
    } catch (error) {
        console.error("Error in dailySalesController:", error); // Debugging
        res.status(500).json({
            success: false,
            message: error.message || "Failed to fetch daily sales data.",
            error: true,
        });
    }
};

module.exports = dailySalesController;
