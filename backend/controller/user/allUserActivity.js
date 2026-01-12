const userModel = require("../../models/userModel");

async function allUserActivity(req, res) {
    try {
        console.log("userId fetching user activity", req.userId);

        // Aggregating user activity data
        const userActivity = await userModel.aggregate([
            {
                $project: {
                    day: { $dayOfWeek: "$createdAt" }, // Extract day of the week
                    hour: { $hour: "$createdAt" }     // Extract hour of the day
                }
            },
            {
                $group: {
                    _id: {
                        day: "$day",
                        timeRange: {
                            $switch: {
                                branches: [
                                    { case: { $lte: ["$hour", 4] }, then: "0-4" },
                                    { case: { $and: [{ $gt: ["$hour", 4] }, { $lte: ["$hour", 8] }] }, then: "4-8" },
                                    { case: { $and: [{ $gt: ["$hour", 8] }, { $lte: ["$hour", 12] }] }, then: "8-12" },
                                    { case: { $and: [{ $gt: ["$hour", 12] }, { $lte: ["$hour", 16] }] }, then: "12-16" },
                                    { case: { $and: [{ $gt: ["$hour", 16] }, { $lte: ["$hour", 20] }] }, then: "16-20" },
                                    { case: { $gt: ["$hour", 20] }, then: "20-24" }
                                ],
                                default: "Unknown"
                            }
                        }
                    },
                    count: { $sum: 1 }
                }
            },
            {
                $group: {
                    _id: "$_id.day",
                    timeRanges: {
                        $push: {
                            timeRange: "$_id.timeRange",
                            count: "$count"
                        }
                    }
                }
            },
            {
                $project: {
                    day: "$_id",
                    timeRanges: {
                        $arrayToObject: {
                            $map: {
                                input: "$timeRanges",
                                as: "range",
                                in: { k: "$$range.timeRange", v: "$$range.count" }
                            }
                        }
                    }
                }
            },
            {
                $project: {
                    _id: 0,
                    day: 1,
                    timeRanges: 1
                }
            }
        ]);

        // Map day numbers to names
        const dayMap = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const formattedData = userActivity.map((item) => ({
            day: dayMap[item.day - 1],
            ...item.timeRanges
        }));

        res.json({
            message: "User Activity Data",
            data: formattedData,
            success: true,
            error: false
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = allUserActivity;
