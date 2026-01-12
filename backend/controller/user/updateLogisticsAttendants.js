const userModel = require("../../models/userModel");

async function updateLogisticsAttendant(req, res) {
    try {
        const sessionUser = req.userId; // User making the request
        const { userId, location, status } = req.body;

        if (!userId) {
            return res.status(400).json({
                message: "User ID is required",
                success: false,
                error: true,
            });
        }

        const payload = {};
        if (status) payload.status = status;
        if (location) payload.location = location;

        const user = await userModel.findById(sessionUser);
        if (!user || (user.role !== "ADMIN" && user.role !== "HR")) {
            return res.status(403).json({
                message: "Unauthorized to perform this action",
                success: false,
                error: true,
            });
        }

        const updatedAttendant = await userModel.findByIdAndUpdate(
            userId,
            payload,
            { new: true, runValidators: true }
        );

        if (!updatedAttendant) {
            return res.status(404).json({
                message: "Logistics Attendant not found",
                success: false,
                error: true,
            });
        }

        return res.json({
            message: "Logistics Attendant Updated",
            data: updatedAttendant,
            success: true,
            error: false,
        });
    } catch (error) {
        return res.status(500).json({
            message: error.message || "Server Error",
            success: false,
            error: true,
        });
    }
}

module.exports = updateLogisticsAttendant;
