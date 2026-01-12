const backendDomain = import.meta.env.VITE_APP_BACKEND_URI

const SummaryApi = {
    signUp : {
        url : `${backendDomain}/api/signup`,
        method : "post"
    },
    signIn : {
        url : `${backendDomain}/api/signin`,
        method : "post"
    }, verifyEmail : {
        url : `${backendDomain}/api/verify-email`,
        method : "post"
    }, forgotPassword : {
        url : `${backendDomain}/api/forgot-password`,
        method : "post"
    },resetPassword: {
        url: `${backendDomain}/api/reset-password`,
        method: "post",
    },
    current_user : {
        url : `${backendDomain}/api/user-details`,
        method : "get"
    },
    logout_user : {
        url : `${backendDomain}/api/userLogout`,
        method : "get"
    },
    allUser : {
        url : `${backendDomain}/api/all-users`,
        method : 'get'
    },userGrowth : {
        url : `${backendDomain}/api/user-growth`,
        method : 'get'
    },
    allUserActivity : {
        url : `${backendDomain}/api//all-users-activity`,
        method : 'get'
    },
    allLogistics : {
        url : `${backendDomain}/api/all-logistics-associate`,
        method : 'get'
    },getActiveLA : {
        url : `${backendDomain}/api/get-active-logistics-associate`,
        method : 'get'
    }, getOrderLogisticsAttendants : {
        url : `${backendDomain}/api/get-order-logistics-attendants`,
        method : 'get'
    },
    assignLA : {
        url : `${backendDomain}/api/assign-logistics-attendants`,
        method : "post"
    }, 
    notifyAdminsOrder : {
        url : `${backendDomain}/api/notify-admins-order`,
        method : 'post'
    }, 
    allOrders : {
        url : `${backendDomain}/api/all-orders`,
        method : 'get'
    },assignedOrders : {
        url : `${backendDomain}/api/assigned-order`,
        method : 'get'
    },
    dailySales : {
        url : `${backendDomain}/api/daily-sales`,
        method : 'get'
    }, salesByChannel : {
        url : `${backendDomain}/api/sales-channel`,
        method : `get`
    },
    updateUser : {
        url : `${backendDomain}/api/update-user`,
        method : "post"
    }, updateLogisticsAttendants : {
        url : `${backendDomain}/api/update-logistics-attendants`,
        method : "post"
    }, 
    updateOrder : {
        url : `${backendDomain}/api/update-user-order`,
        method : "post"
    },
    
    uploadProduct : {
        url : `${backendDomain}/api/upload-product`,
        method : "post"
    },
    allProduct : {
        url : `${backendDomain}/api/get-product`,
        method : "get"
    },
    salesTrend : {
        url : `${backendDomain}/api/sales-trend`,
        method : "get"
    },
    updateProduct : {
        url : `${backendDomain}/api/update-product`,
        method : "post"
    },
    categoryProduct : {
        url : `${backendDomain}/api/get-categoryProduct`,
        method : "get"
    },
    statusProduct : {
        url : `${backendDomain}/api/get-product-status`,
        method : "get"
    },
    subCategoryProduct : {
        url : `${backendDomain}/api/get-sub-categoryProduct`,
        method : "get"
    },
    hotDealProduct : {
        url : `${backendDomain}/api/get-hot-dealProduct`,
        method : "get"
    },
    categoryWiseProduct : {
        url : `${backendDomain}/api/category-product`,
        method : "post"
    },
    subCategoryWiseProduct : {
        url : `${backendDomain}/api/sub-category-product`,
        method : "post"
    },
    hotDealWiseProduct : {
        url : `${backendDomain}/api/hot-deal-product`,
        method : "post"
    },
    productStatusWise : {
        url : `${backendDomain}/api/product-status`,
        method : "post"
    },
    productDetails : {
        url : `${backendDomain}/api/product-details`,
        method : 'post'
    },
    addToCartProduct : {
        url : `${backendDomain}/api/addtocart`,
        method : 'post'
    },
    addToCartProductCount : {
        url : `${backendDomain}/api/countAddToCartProduct`,
        method : 'get'
    },
    addToCartProductView : {
        url : `${backendDomain}/api/viewCartProduct`,
        method : 'get'
    },
    updateCartProduct : {
        url : `${backendDomain}/api/update-cart-product`,
        method : 'post'
    },
    deleteCartProduct : {
        url : `${backendDomain}/api/delete-cart-product`,
        method : 'post'
    },
    searchProduct : {
        url : `${backendDomain}/api/search`,
        method : "get"
    },
    filterProduct : {
        url : `${backendDomain}/api/filter-product`,
        method : 'post'
    },
    payment : {
        url : `${backendDomain}/api/process-payment`,
        method : 'post'
    },
    verifyPayment : {
        url : `${backendDomain}/api/verify-payment`,
        method : 'post'
    },
    checkout : {
        url : `${backendDomain}/api/checkout`,
        method : "post"
    },
    order : {
        url : `${backendDomain}/api/order-list`,
        method : 'get'
    },
    deleteUploadedProduct : {
        url : `${backendDomain}/api/delete-uploaded-product`,
        method : 'post'
    },payondeliveryorder : {
        url : `${backendDomain}/api/payondelivery-orders`,
        method : 'get'
    }, createNotification : {
        url : `${backendDomain}/api/create-notification`,
        method : 'post'
    }, getNotification : {
        url : `${backendDomain}/api/get-notification`,
        method : 'get'
    }, markAsRead : {
        url : `${backendDomain}/api/mark-as-read`,
        method : 'post'
    },  countUnreadNotifications : {
        url : `${backendDomain}/api/unread-count`,
        method : 'get'
    }, 
    
};

export default SummaryApi;
