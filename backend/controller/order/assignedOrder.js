const orderModel = require("../../models/checkoutModel");
const NotificationModel = require("../../models/notification"); // Import your notification model

const assignedOrdersController = async (req, res) => {
    try {
        const assignedOrders = await orderModel
            .find({ assignedTo: { $exists: true, $ne: null } }) // Filter only assigned orders
            .populate("assignedTo", "_id email name") // Populate user ID, email, and name
            .sort({ createdAt: -1 });

        // Send notifications for newly assigned orders
        const notificationPromises = assignedOrders.map(async (order) => {
            if (order.assignedTo) {
                const notificationMessage = `
                    You have been assigned a new order:
                    - Order ID: ${order._id}
                    - Total Price: ${order.totalPrice}
                    - Customer Name: ${order.name}
                `;

                const newNotification = new NotificationModel({
                    userId: order.assignedTo._id, // Assigned user's ID
                    type: "Order Assignment",
                    message: notificationMessage,
                    isRead: false,
                    createdAt: new Date(),
                });

                await newNotification.save();
            }
        });

        await Promise.all(notificationPromises);

        res.json({
            data: assignedOrders,
            message: "Assigned Orders fetched successfully, and notifications sent.",
            success: true,
            error: false,
        });
    } catch (error) {
        console.error("Error fetching assigned orders:", error);
        res.status(500).json({
            message: error.message || "Internal Server Error",
            success: false,
            error: true,
        });
    }
};

module.exports = assignedOrdersController;
