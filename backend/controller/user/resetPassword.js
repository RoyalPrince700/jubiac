const bcrypt = require("bcryptjs");
const userModel = require("../../models/userModel");
const { sendResetSuccessfulEmail } = require("../../mailtrap/emails");

async function resetPassword(req, res) {
    

    try {
            const { token } = req.params;
             const { password } = req.body;

// Find the user with a valid reset token
const user = await userModel.findOne({
    resetPasswordToken: token,
    resetPasswordExpiresAt: { $gt: Date.now() },
});

if (!user) {
    return res.status(400).json({ success: false, message: "Invalid or expired reset token" });
}

// Hash the new password
const hashedPassword = await bcrypt.hash(password, 10);

// Update the user's password and clear the reset token
user.password = hashedPassword;
user.resetPasswordToken = undefined;
user.resetPasswordExpiresAt = undefined;
await user.save();

// Send success email
await sendResetSuccessfulEmail(user.email);

// Send success response
return res.status(200).json({ success: true, message: "Password reset successfully." });

        }

        
    catch (error) {
        console.error("Error during password reset:", error);

        // Send error response
        return res.status(400).json({ success: false, message: error.message });
    }
}

module.exports = resetPassword;
