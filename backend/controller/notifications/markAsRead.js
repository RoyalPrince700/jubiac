const Notification = require("../../models/notification");

// Mark notifications as read
const markAsRead = async (req, res) => {
  const { notificationIds } = req.body;

  if (!notificationIds || !Array.isArray(notificationIds)) {
    return res.status(400).json({ success: false, message: "Notification IDs must be an array." });
  }

  try {
    await Notification.updateMany(
      { _id: { $in: notificationIds } },
      { $set: { isRead: true } }
    );
    res.status(200).json({ success: true, message: "Notifications marked as read." });
  } catch (error) {
    res.status(500).json({ success: false, message: "Error updating notifications.", error: error.message });
  }
};

module.exports = markAsRead;
