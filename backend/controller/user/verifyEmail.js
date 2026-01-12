const userModel = require("../../models/userModel");
// const { sendWelcomeEmail } = require("../../mailtrap/emails");

async function verifyEmailController(req, res) {
    try {
        console.log("Request body at verification:", req.body);

        const { code } = req.body;

        if (!code) {
            return res.status(400).json({ success: false, message: "Verification code is required" });
        }

        const user = await userModel.findOne({
            verificationToken: code,
            verificationTokenExpiresAt: { $gt: Date.now() },
        });

        console.log("User found:", user);

        if (!user) {
            return res.status(400).json({ success: false, message: "Invalid or expired verification code" });
        }

        user.isVerified = true;
        user.verificationToken = undefined;
        user.verificationTokenExpiresAt = undefined;
        await user.save();

        // Commenting out the welcome email
        // await sendWelcomeEmail(user.email);

        res.status(200).json({ success: true, message: "Email verified successfully" });
    } catch (error) {
        console.error("Error during email verification:", error);
        res.status(500).json({ success: false, message: "An error occurred while verifying the email", error: error.message });
    }
}

module.exports = verifyEmailController;
