const addToCartModel = require('../../models/cartProduct');
const checkoutModel = require('../../models/checkoutModel'); // Adjust the path if needed
const NotificationModel = require('../../models/notification'); // Import notification model
const UserModel = require('../../models/userModel'); // Import user model to fetch HR users
const { sendUserOrderConfirmationEmail, sendOrderNotificationEmail } = require('../../mailtrap/emails'); // Import email function

const createCheckout = async (req, res) => {
  try {
    console.log('Incoming payload:', req.body);

    const { name, number, address, cartItems, totalPrice, paymentMethod, note } = req.body;

    // Validate payload
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!name || !number || !address || !Array.isArray(cartItems) || !cartItems.length || typeof totalPrice !== 'number' || !paymentMethod) {
      return res.status(400).json({
        success: false,
        message: 'Invalid or missing fields',
      });
    }
    if (!phoneRegex.test(number)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid phone number format',
      });
    }

    // Create new checkout
    const newCheckout = new checkoutModel({
      name,
      number,
      address,
      cartItems: cartItems.map(item => ({
        productId: item.productId._id || item.productId,
        quantity: item.quantity
      })),
      totalPrice,
      paymentMethod,
      note: note || '',
      userId: req.userId, // Ensure userId is included
    });

    const savedCheckout = await newCheckout.save();

    if (savedCheckout?._id) {
      console.log('Clearing cart for user:', req.userId);
      await addToCartModel.deleteMany({ userId: req.userId });

      // Create notification for the user
      const userNotification = new NotificationModel({
        userId: req.userId,
        type: 'Order Confirmation',
        message: `Your order #${savedCheckout._id} has been placed successfully.`,
        isRead: false,
        createdAt: new Date(),
      });
      await userNotification.save();

      // Fetch all HR users from the database
      const hrUsers = await UserModel.find({ role: 'HR' }); // Adjust 'role' field as per your database schema

      // Create notifications for HR users
      const hrNotifications = hrUsers.map((hr) => ({
        userId: hr._id,
        type: 'New Order Alert',
        message: `A new order #${savedCheckout._id} has been placed by ${name}.`,
        isRead: false,
        createdAt: new Date(),
      }));

      // Save HR notifications in bulk
      if (hrNotifications.length > 0) {
        await NotificationModel.insertMany(hrNotifications);
      }

      // Send order confirmation email to the user
      console.log('[PRODUCTION CHECKOUT] 📧 Sending order confirmation email to user');
      console.log('[PRODUCTION CHECKOUT] 👤 User found:', !!user, 'User email:', user?.email);
      try {
        const user = await UserModel.findById(req.userId);
        console.log('[CHECKOUT] 👤 User lookup for order confirmation:', { userId: req.userId, userEmail: user?.email, userFound: !!user });
        if (user && user.email) {
          await sendUserOrderConfirmationEmail(user.email, savedCheckout);
          console.log('[CHECKOUT] ✅ Order confirmation email sent to user:', user.email);
        } else {
          console.log('[CHECKOUT] ⚠️ User not found or no email, skipping order confirmation');
        }
      } catch (emailError) {
        console.error('[CHECKOUT] ❌ Error sending order confirmation email:', emailError);
        // Don't throw error - we don't want to block the order creation
      }

      // Send order notification email to admin
      console.log('[CHECKOUT] 📧 Sending order notification email to admin');
      try {
        const adminEmail1 = process.env.ADMINEMAIL1;
        const adminEmail2 = process.env.ADMINEMAIL2;
        const adminNotificationEmail = process.env.ADMIN_NOTIFICATION_EMAIL;

        // Collect all admin email addresses
        const adminRecipients = [];
        if (adminEmail1) adminRecipients.push(adminEmail1);
        if (adminEmail2) adminRecipients.push(adminEmail2);
        if (adminNotificationEmail && !adminRecipients.includes(adminNotificationEmail)) {
          adminRecipients.push(adminNotificationEmail);
        }

        console.log('[CHECKOUT] 👥 Admin recipients found:', adminRecipients);

        if (adminRecipients.length > 0) {
          // Format the order data for admin notification
          const adminOrderData = {
            name: savedCheckout.name,
            number: savedCheckout.number,
            address: savedCheckout.address,
            note: savedCheckout.note || 'N/A',
            paymentMethod: savedCheckout.paymentMethod || 'Pay on Delivery',
            total: `₦${savedCheckout.totalPrice}`,
            cartItems: savedCheckout.cartItems
          };

          console.log('[CHECKOUT] 📧 Sending admin order notification for order:', savedCheckout._id);
          await sendOrderNotificationEmail(adminRecipients, adminOrderData);
          console.log('[CHECKOUT] ✅ Order notification email sent to admins:', adminRecipients.join(', '));
        } else {
          console.log('[CHECKOUT] ⚠️ No admin email addresses configured for order notifications');
        }
      } catch (emailError) {
        console.error('[CHECKOUT] ❌ Error sending admin order notification:', emailError);
        // Don't throw error - we don't want to block the order creation
      }
    }

    res.status(201).json({
      success: true,
      message: 'Checkout created successfully',
      data: savedCheckout,
    });
  } catch (error) {
    console.error('Error creating checkout:', error);
    res.status(500).json({
      success: false,
      message: 'Internal Server Error',
      error: error.message || error,
    });
  }
};

module.exports = createCheckout;
