const Notification = require('../../models/notification');

const countUnreadNotifications = async (req, res) => {
    try {
      const userId = req.userId; // Ensure `req.user` is available and populated
      const unreadCount = await Notification.countDocuments({ userId, isRead: false });
  
      res.status(200).json({ success: true, unreadCount });
    } catch (error) {
      console.error('Error counting unread notifications:', error);
      res.status(500).json({
        success: false,
        message: 'An error occurred while counting unread notifications',
        error: error.message,
      });
    }
  };
  

module.exports = countUnreadNotifications;