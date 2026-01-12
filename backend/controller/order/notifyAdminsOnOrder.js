const { sendOrderNotificationEmail } = require('../../mailtrap/emails');

const notifyAdminsOnOrder = async (req, res) => {
  try {
    const {
      name,
      number,
      address,
      note = '',
      cartItems = [],
      total,
      paymentMethod = 'WhatsApp Order',
    } = req.body || {};

    if (!name || !number || !address || !Array.isArray(cartItems) || !total) {
      return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    const admin1 = process.env.ADMINEMAIL1;
    const admin2 = process.env.ADMINEMAIL2;
    const recipients = [admin1, admin2].filter(Boolean);

    if (recipients.length === 0) {
      return res.status(500).json({ success: false, message: 'Admin emails not configured' });
    }

    await sendOrderNotificationEmail(recipients, {
      name,
      number,
      address,
      note,
      cartItems,
      total,
      paymentMethod,
    });

    res.json({ success: true });
  } catch (err) {
    console.error('notifyAdminsOnOrder error:', err);
    res.status(500).json({ success: false, message: 'Failed to send email' });
  }
};

module.exports = notifyAdminsOnOrder;


