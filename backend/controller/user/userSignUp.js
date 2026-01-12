const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const userModel = require("../../models/userModel");
const NotificationModel = require("../../models/notification"); // Import the notification model
const { sendVerificationEmail } = require("../../mailtrap/emails");

async function userSignUpController(req, res) {
  const { email, password } = req.body;

  try {
    if (!email || !password) {
      return res.status(400).json({ success: false, message: "All fields are required" });
    }

    const normalizedEmail = email.trim().toLowerCase();
    const userAlreadyExists = await userModel.findOne({ email: normalizedEmail });

    if (userAlreadyExists) {
      return res.status(400).json({ success: false, message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

    const newUser = new userModel({
      email: normalizedEmail,
      password: hashedPassword,
      verificationToken,
      verificationTokenExpiresAt: Date.now() + 24 * 60 * 60 * 1000, // 24 hours
    });

    await newUser.save();

    // Generate JWT token
    const token = jwt.sign({ _id: newUser._id }, process.env.TOKEN_SECRET_KEY, { expiresIn: "8h" });

    // Set the cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    // Send verification email
    await sendVerificationEmail(newUser.email, verificationToken);

    // Create a welcome notification
    const welcomeNotification = new NotificationModel({
      userId: newUser._id,
      type: "Welcome Message",
      message: `Welcome to our platform, ${newUser.email}! We're thrilled to have you here.`,
      isRead: false,
      createdAt: new Date(),
    });

    await welcomeNotification.save();

    res.status(201).json({
      success: true,
      message: "User created successfully",
      user: {
        ...newUser._doc,
        password: undefined, // Exclude password from response
      },
    });
  } catch (error) {
    console.error("Error during signup:", error);
    res.status(500).json({ success: false, message: error.message });
  }
}

module.exports = userSignUpController;
