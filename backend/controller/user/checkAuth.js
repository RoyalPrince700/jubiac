const userModel = require("../../models/userModel");


async function checkAuth(req, res, next) {
    try {
        const user = await userModel.findById(req.userId);
        if (!user) {
            return res.status(401).json({ success: false, message: "Unauthorized" });
        }
        res.status(200).json({ success: true, user: {
            ...user._doc,
            password: undefined,
        } });

        } catch (error) {
            console.error("Error during password reset:", error);
            res.status(500).json({ success: false, message: "An error occurred while resetting the password", error: error.message });
        }
            
}

module.exports = checkAuth;