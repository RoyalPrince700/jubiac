const User = require('../../models/userModel'); // Import your user model

const getActiveLAs = async (req, res) => {
    try {
        const activeLAs = await User.find({
            role: "LOGISTICS_ASSOCIATE",
            status: "Active",
        }).select("_id name email"); // Select only necessary fields

        if (!activeLAs.length) {
            return res.status(404).json({
                success: false,
                message: "No active Logistics Associates found.",
            });
        }

        res.status(200).json({ success: true, data: activeLAs });
    } catch (error) {
        res.status(500).json({ success: false, message: error.message });
    }
};

module.exports = getActiveLAs;
