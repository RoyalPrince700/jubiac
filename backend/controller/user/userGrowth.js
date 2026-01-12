const userModel = require("../../models/userModel");

async function userGrowth(req, res) {
  try {
    // Get the current date and the last Sunday
    const now = new Date();
    const lastSunday = new Date(now);
    lastSunday.setDate(now.getDate() - now.getDay()); // Find the most recent Sunday

    // Ensure to get records starting from the last Sunday
    const usersByDay = await userModel.aggregate([
      {
        $match: {
          createdAt: { $gte: lastSunday }, // Users created from last Sunday onwards
        },
      },
      {
        $project: {
          dayOfWeek: { $dayOfWeek: "$createdAt" }, // Extract day of the week (1 = Sunday, 7 = Saturday)
        },
      },
      {
        $group: {
          _id: "$dayOfWeek", // Group by day of the week
          userCount: { $sum: 1 }, // Count users per day
        },
      },
      {
        $sort: { _id: 1 }, // Sort by day of the week (Sunday to Saturday)
      },
    ]);

    // Map the days of the week to their names and fill missing days with 0
    const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const growthData = daysOfWeek.map((day, index) => {
      const dayData = usersByDay.find((d) => d._id === index + 1); // MongoDB days are 1-based
      return { day, users: dayData ? dayData.userCount : 0 }; // Default to 0 if no data
    });

    res.json({
      message: "User growth data for the last week",
      data: growthData,
      success: true,
      error: false,
    });
  } catch (err) {
    res.status(400).json({
      message: err.message || err,
      error: true,
      success: false,
    });
  }
}

module.exports = userGrowth;
