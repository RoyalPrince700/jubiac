const Checkout = require('../../models/checkoutModel'); // Import your checkout model

const assignOrderToLA = async (req, res) => {
    try {
        console.log("Request received:", req.body); // Log the request body for debugging

        const { userId, orderId } = req.body; // Include orderId in the request

        // Validate the userId and orderId in the request
        if (!userId || !orderId) {
            console.log("Error: UserId or OrderId is missing in the request.");
            return res.status(400).json({ success: false, message: "UserId and OrderId are required" });
        }

        // Find and update the specified order
        const updatedOrder = await Checkout.findOneAndUpdate(
            { _id: orderId, status: "Pending", assignedTo: null }, // Filter by orderId and unassigned status
            { assignedTo: userId }, // Assign to the specified user
            { new: true } // Return the updated document
        );

        if (!updatedOrder) {
            console.log("Order not found or already assigned.");
            return res.status(404).json({ success: false, message: "Order not found or already assigned" });
        }

        console.log("Order successfully assigned:", {
            orderId: updatedOrder._id,
            assignedTo: updatedOrder.assignedTo,
        });

        // Respond with success and the updated order details
        res.status(200).json({
            success: true,
            message: "Order assigned successfully",
            data: updatedOrder,
        });
    } catch (error) {
        console.error("Error in assignOrderToLA:", error); // Log the error
        res.status(500).json({ success: false, message: "An error occurred during order assignment" });
    }
};

module.exports = assignOrderToLA;
