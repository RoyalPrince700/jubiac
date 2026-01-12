const addToCartModel = require('../../models/cartProduct');
const checkoutModel = require('../../models/checkoutModel'); // Adjust the path if needed
const NotificationModel = require('../../models/notification'); // Import notification model
const UserModel = require('../../models/userModel'); // Import user model to fetch HR users

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
