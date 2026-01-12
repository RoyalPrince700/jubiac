const NotificationModel = require('../../models/notification');

const getNotifications = async (req, res) => {
  try {
    const userId = req.userId; // Ensure this is correctly populated
    console.log("Fetching notifications for userId:", userId);

    const notifications = await NotificationModel.find({ userId }).sort({ createdAt: -1 });
    console.log("Notifications fetched:", notifications);

    if (!notifications.length) {
      console.log("No notifications found for userId:", userId);
    }

    res.status(200).json({
      success: true,
      notifications,
    });
  } catch (error) {
    console.error("Error fetching notifications:", error);
    res.status(500).json({
      success: false,
      message: "Failed to fetch notifications.",
    });
  }
};


module.exports = getNotifications;
