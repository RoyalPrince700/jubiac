const Notification = require("../../models/notification");

// Create a new notification
const createNotification = async (req, res) => {
  const { userId, type, message } = req.body;

  if (!userId || !type || !message) {
    return res.status(400).json({ success: false, message: "All fields are required." });
  }

  try {
    const notification = new Notification({ userId, type, message });
    await notification.save();
    res.status(201).json({ success: true, message: "Notification created successfully.", notification });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error creating notification.", error: error.message });
  }
};

module.exports = createNotification;
