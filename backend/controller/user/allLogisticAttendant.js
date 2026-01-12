const userModel = require("../../models/userModel");

async function allLogisticsAssociates(req, res) {
    try {
        console.log("userId all logistic Associate", req.userId);

        // Find users with the role 'Logistics Associate'
        const allLogisticsAssociates = await userModel.find({ role: "LOGISTICS_ASSOCIATE" });

        res.json({
            message: "All Logistics Associates",
            data: allLogisticsAssociates, // Send the filtered users to the frontend
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

module.exports = allLogisticsAssociates;
