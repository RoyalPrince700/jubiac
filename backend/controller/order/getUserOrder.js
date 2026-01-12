const checkoutModel = require("../../models/checkoutModel");

const getUserOrders = async (req, res) => {
  try {
    // Assume `req.userId` is set by middleware after verifying the token
    const currentUserId = req.userId;

    if (!currentUserId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required to fetch orders",
      });
    }

    console.log("Fetching orders for user ID:", currentUserId);

    const userOrders = await checkoutModel
      .find({ userId: currentUserId }) // Filter by current user
      .sort({ createdAt: -1 })
      .populate(
        "cartItems.productId", 
        "productName productImage sellingPrice sellerName sellerBrandName sellerPhoneNumber" // Include seller details
      )
      .populate("userId", "name number address email"); // Populate user details

    // Log the fetched data for debugging
    console.log("Orders fetched for user:", JSON.stringify(userOrders, null, 2));

    res.json({
      data: userOrders,
      message: "User Orders",
      success: true,
      error: false,
    });
  } catch (error) {
    console.error("Error fetching user orders:", error);
    res.status(500).json({
      message: error.message || error,
      success: false,
      error: true,
    });
  }
};

module.exports = getUserOrders;
