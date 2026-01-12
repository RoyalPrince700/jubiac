const userModel = require("../../models/userModel");
const crypto = require("crypto");
const { sendPasswordResetEmail } = require("../../mailtrap/emails");

async function forgotPassword(req, res) {
    const { email } = req.body;

    try {
        const normalizedEmail = email.trim().toLowerCase();
        const user = await userModel.findOne({ email: normalizedEmail });

        if (!user) {
            return res.status(404).json({ success: false, message: "User not found" });
        }

        // Generate reset token
        const resetToken = crypto.randomBytes(20).toString("hex");
        const resetTokenExpiresAt = Date.now() + 3600000; // 1 hour

        // Save token and expiration time in the user document
        user.resetPasswordToken = resetToken;
        user.resetPasswordExpiresAt = resetTokenExpiresAt;

        await user.save();

        // Send password reset email
        try {
            console.log(`Password reset requested for email: ${email}`);
            console.log(`Reset token generated: ${resetToken}`);

            
            await sendPasswordResetEmail(user.email, `${process.env.FRONTEND_URL}/reset-password/${resetToken}`);
        } catch (emailError) {
            console.error("Error sending password reset email:", emailError);
            return res.status(500).json({ success: false, message: "Failed to send password reset email." });
        }

        // Respond with success
        res.status(200).json({ success: true, message: "Password reset email sent successfully." });
    } catch (error) {
        console.error("Error during password reset:", error);
        res.status(500).json({ success: false, message: "An error occurred while resetting the password", error: error.message });
    }
}

module.exports = forgotPassword;
