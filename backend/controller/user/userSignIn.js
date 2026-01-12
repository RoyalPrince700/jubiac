const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../../models/userModel");
const { sendVerificationEmail } = require("../../mailtrap/emails");

async function userSignInController(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required",
      });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const user = await userModel.findOne({ email: normalizedEmail });

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    // Check if the user is verified
    if (!user.isVerified) {
      // Check if the token has expired
      if (user.verificationTokenExpiresAt < Date.now()) {
        // Token expired: generate a new token
        const newVerificationToken = Math.floor(100000 + Math.random() * 900000).toString();
        user.verificationToken = newVerificationToken;
        user.verificationTokenExpiresAt = Date.now() + 24 * 60 * 60 * 1000; // 24 hours
        await user.save();

        // Send the new token to the user's email
        await sendVerificationEmail(user.email, newVerificationToken);
      }

      return res.status(403).json({
        success: false,
        redirect: true, // Flag to indicate redirection
        message: "Email not verified. A new token has been sent to your email.",
      });
    }

    // Validate password
    const passwordValid = await bcrypt.compare(password, user.password);
    if (!passwordValid) {
      return res.status(401).json({
        success: false,
        message: "Invalid password. Please check and try again.",
      });
    }

    // Generate JWT token
    const token = jwt.sign(
      { _id: user._id, email: user.email },
      process.env.TOKEN_SECRET_KEY,
      { expiresIn: "8h" }
    );

    // Set the cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    res.status(200).json({
      success: true,
      message: "Login successful",
      token,
    });
  } catch (err) {
    console.error("Error in sign-in:", err);
    res.status(500).json({
      success: false,
      message: err.message || "An unexpected error occurred",
    });
  }
}

module.exports = userSignInController;


// const bcrypt = require('bcryptjs');
// const userModel = require("../../models/userModel");
// const jwt = require('jsonwebtoken');

// async function userSignInController(req, res) {
//   try {
//     const { email, password } = req.body;

//     // Validate email and password presence
//     if (!email) {
//       return res.status(400).json({ message: 'Please provide email', error: true, success: false });
//     }
//     if (!password) {
//       return res.status(400).json({ message: 'Please provide password', error: true, success: false });
//     }

//     // Check if user exists
//     const user = await userModel.findOne({ email });
//     if (!user) {
//       return res.status(404).json({ message: "User not found", error: true, success: false });
//     }

//     // Check if the user is verified
//     if (!user.isVerified) {
//       return res.status(403).json({
//         message: "Email not verified. Please verify your email before logging in.",
//         error: true,
//         success: false,
//       });
//     }

//     // Validate password
//     const checkPassword = await bcrypt.compare(password, user.password);
//     if (!checkPassword) {
//       return res.status(401).json({
//         message: "Invalid password, please check your password",
//         error: true,
//         success: false,
//       });
//     }

//     // Prepare token data
//     const tokenData = {
//       _id: user.id,
//       email: user.email,
//     };

//     // Generate JWT token
//     const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: 60 * 60 * 8 }); // Token valid for 8 hours

//     // Log the token in the backend terminal
//     console.log("Generated Token:", token);

//     // Set cookie options
//     const tokenOption = {
//       httpOnly: true,
//       secure: true,
//       sameSite: 'None',
//     };

//     // Send token as a cookie and return response with token data
//     res.cookie("token", token, tokenOption).json({
//       message: "Login Successfully",
//       data: tokenData,
//       success: true,
//       error: false,
//       token, // Include the token in the response
//     });

//   } catch (err) {
//     // Handle errors and respond with the message
//     res.status(500).json({
//       message: err.message || "An unexpected error occurred",
//       error: true,
//       success: false,
//     });
//   }
// }

// module.exports = userSignInController;
