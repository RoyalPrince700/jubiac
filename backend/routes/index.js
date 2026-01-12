const express = require('express');
const router = express.Router();

const authToken = require('../middleware/authToken');
const requireRole = require('../middleware/requireRole');

const userSignInController = require('../controller/user/userSignIn');
const userDetailsController = require('../controller/user/userDetails');
const userLogout = require('../controller/user/userLogout');
const allUsers = require('../controller/user/allUsers');
const updateUser = require('../controller/user/updateUser');
const uploadProductController = require('../controller/product/uploadProduct');
const getProductController = require('../controller/product/getProduct');
const updateProductController = require('../controller/product/updateProduct');
const getCategoryProduct = require('../controller/product/getCategoryProductOne');
const getCategoryWiseProduct = require('../controller/product/getCategoryWiseProduct');
const getProductDetails = require('../controller/product/getProductDetails');
const addToCartController = require('../controller/user/addToCartController');
const countAddToCartProduct = require('../controller/user/countAddToCartProduct');
const updateAddToCartProduct = require('../controller/user/updateAddToCartProduct');
const addToCartViewProduct  = require('../controller/user/addToCartViewProduct');
const deleteAddToCartProduct = require('../controller/user/deleteAddToCartProduct');
const searchProduct = require('../controller/product/searchProduct');
const filterProductController = require('../controller/product/filterProduct');
const paymentController = require('../controller/order/paymentController');
const webhooks = require('../controller/order/webhooks');
const orderController = require('../controller/order/orderController');
const UserSignUpController = require('../controller/user/userSignUp');
const allOrdersController = require('../controller/order/allOrders');
const deleteProductController = require('../controller/product/deleteProduct');
const placeFoodOrder = require('../controller/food/foodOrderController');
const getFoodMenuController = require('../controller/food/getFoodMenuController');
const getSubCategoryWiseProduct = require('../controller/product/getSubCategoryWiseProduct');
const getSubCategoryProduct = require('../controller/product/getSubCategoryProductOne');
const getProductStatusWise = require('../controller/product/getProductStatusWise');
const getProductStatus = require('../controller/product/getProductStatus');
const getHotDealWiseProduct = require('../controller/product/getHotDealWise');
const createCheckout = require('../controller/order/checkoutController');
const getUserOrders = require('../controller/order/getUserOrder');
const updateOrderStatus = require('../controller/order/updateOrderStatus');
const allLogisticsAssociates = require('../controller/user/allLogisticAttendant');
const updateLogisticsAttendant = require('../controller/user/updateLogisticsAttendants');
const assignOrderToLA = require('../controller/logistic/assignOrderToLA');
const getActiveLogisticsAssociates = require('../controller/logistic/getActiveLA');
const getOrderForLA = require('../controller/logistic/getOrderforLA');
const getActiveLAs = require('../controller/logistic/getActiveLA');
const verifyEmailController = require('../controller/user/verifyEmail');
const forgotPassword = require('../controller/user/forgotPassword');
const resetPassword = require('../controller/user/resetPassword');
const checkAuth = require('../controller/user/checkAuth');
const allUserActivity = require('../controller/user/allUserActivity');
const userGrowth = require('../controller/user/userGrowth');
const dailySalesController = require('../controller/order/dailySalesController');
const salesByChannelController = require('../controller/order/salesByChannelController');
const salesTrendController = require('../controller/order/salesTrendController');
const assignedOrdersController = require('../controller/order/assignedOrder');
const createNotification = require('../controller/notifications/createNotification');
const getNotifications = require('../controller/notifications/getNotification');
const markAsRead = require('../controller/notifications/markAsRead');
const countUnreadNotifications = require('../controller/user/countNotification');
const notifyAdminsOnOrder = require('../controller/order/notifyAdminsOnOrder');
const { upload, uploadImage } = require('../controller/uploadImage');

const { googleAuth, googleAuthCallback } = require('../controller/user/authController');

const verifyPaymentController = require('../controller/order/verifyPaymentController');

// Authentication routes
// router.post("/signup", UserSignUpController);
// router.post("/signin", userSignInController);
router.get("/auth/google", googleAuth);
router.get("/auth/google/callback", googleAuthCallback);
router.get("/user-details", authToken, userDetailsController);
router.get("/userLogout", userLogout);
router.post("/verify-email", verifyEmailController)
router.post("/forgot-password", forgotPassword)
router.post("/reset-password/:token", resetPassword);
router.get("/check-auth", authToken, checkAuth )

// Token verification route
router.get("/auth/verify", authToken, (req, res) => {
    try {
        // If authToken middleware sets req.userId, the token is valid
        if (req.userId) {
            return res.status(200).json({
                success: true,
                message: 'Token verified successfully!',
                userId: req.userId, // Pass the user ID to the response
            });
        }
        // If req.userId is not set, return an unauthorized response
        res.status(401).json({
            success: false,
            message: 'Unauthorized access. Please login.',
        });
    } catch (err) {
        // Catch unexpected errors and respond with an appropriate status code
        console.error("Error in /auth/verify route:", err.message);
        res.status(500).json({
            success: false,
            message: 'Internal Server Error',
        });
    }
});

// notification

router.post("/create-notification", authToken,createNotification);
router.get("/get-notification",authToken, getNotifications);
router.post("/mark-as-read",authToken, markAsRead);
router.get( "/unread-count",authToken, countUnreadNotifications);
// Admin panel
router.get("/all-users", authToken, requireRole('ADMIN'), allUsers);
router.get("/user-growth", authToken, requireRole('ADMIN'), userGrowth);
router.get("/all-users-activity", authToken, requireRole('ADMIN'), allUserActivity);
router.get("/all-logistics-associate", authToken, requireRole('ADMIN','HR'), allLogisticsAssociates);
router.get("/get-active-logistics-associate", authToken, getActiveLAs);
router.get("/assigned-order", assignedOrdersController);
router.get("/all-orders", authToken, requireRole('ADMIN'), allOrdersController);
router.get("/daily-sales", authToken, requireRole('ADMIN'), dailySalesController);
router.get("/sales-channel", authToken, requireRole('ADMIN'), salesByChannelController);
router.get("/sales-trend", authToken, requireRole('ADMIN'), salesTrendController);
router.post("/update-user", authToken, requireRole('ADMIN'), updateUser);
router.post("/update-logistics-attendants", authToken, requireRole('ADMIN','HR'), updateLogisticsAttendant);
router.post("/assign-logistics-attendants", authToken, requireRole('ADMIN','HR'), assignOrderToLA);
router.get("/get-order-logistics-attendants", authToken, getOrderForLA);
router.post("/update-user-order", authToken, updateOrderStatus);
router.post("/delete-uploaded-product", authToken, requireRole('ADMIN'), deleteProductController);
router.post('/api/place-food-order', authToken, placeFoodOrder);
// Food menu route
router.get('/api/food-menu', getFoodMenuController);
// Upload product
router.post("/upload-product", authToken, uploadProductController);
// Upload image
router.post("/upload-image", authToken, upload.single('image'), uploadImage);
router.get("/get-product", getProductController);
router.post("/update-product", authToken, requireRole('ADMIN'), updateProductController);
router.get("/get-categoryProduct", getCategoryProduct);
router.get("/get-sub-categoryProduct", getSubCategoryProduct);
router.get("/get-hot-dealProduct", getHotDealWiseProduct);
router.get("/get-product-status", getProductStatus);
router.post("/category-product", getCategoryWiseProduct);
router.post("/sub-category-product", getSubCategoryWiseProduct);
router.post("/hot-deal-product", getHotDealWiseProduct);
router.post("/product-status", getProductStatusWise);
router.post("/product-details", getProductDetails);
router.post('/checkout', authToken, createCheckout); // Create checkout
router.post('/notify-admins-order', notifyAdminsOnOrder);
// User add to cart
router.post("/addtocart", authToken, addToCartController);
router.get("/countAddToCartProduct", authToken, countAddToCartProduct);
router.get("/viewCartProduct", authToken, addToCartViewProduct);
router.post("/update-cart-product", authToken, updateAddToCartProduct);
router.post("/delete-cart-product", authToken, deleteAddToCartProduct);
router.get("/search", searchProduct);
router.post("/filter-product", filterProductController);
router.get('/payondelivery-orders', authToken, getUserOrders);
// Payment and order
router.post("/process-payment", authToken, paymentController);
router.post("/verify-payment", authToken, verifyPaymentController);
router.post("/webhook", webhooks);
router.get("/order-list", authToken, orderController);

module.exports = router;
