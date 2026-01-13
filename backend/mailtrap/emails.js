const { transporter, sender } = require('./mailtrap.config');
const { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, ORDER_NOTIFICATION_TEMPLATE, ORDER_CONFIRMATION_EMAIL_TEMPLATE, PAYMENT_SUCCESS_EMAIL_TEMPLATE, ORDER_STATUS_UPDATE_EMAIL_TEMPLATE } = require('./emailTemplates');

const logSendAttempt = (label, options) => {
    console.log(`[Mailtrap][${label}] attempting send`, {
        to: options.to,
        subject: options.subject,
        from: options.from,
    });
};

const sendVerificationEmail = async (email, token) => {
    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Verify your email address",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", token),
        };

        logSendAttempt('verification', mailOptions);
        const response = await transporter.sendMail(mailOptions);
        console.log("Verification email sent successfully:", response.messageId);
    } catch (error) {
        console.error("Error sending verification email:", error);
        throw new Error(`Error sending verification email: ${error.message}`);
    }
};

const sendWelcomeEmail = async (email) => {
    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Welcome to Jubiac!",
            html: `<h1>Welcome to Jubiac!</h1><p>Thank you for joining us. We're excited to have you!</p>`,
        };

        logSendAttempt('welcome', mailOptions);
        const response = await transporter.sendMail(mailOptions);
        console.log("Welcome email sent successfully:", response.messageId);
    } catch (error) {
        console.error("Error sending welcome email:", error);
        throw new Error(`Error sending welcome email: ${error.message}`);
    }
}

const sendPasswordResetEmail = async (email, resetURL) => {
    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
        };

        logSendAttempt('password-reset', mailOptions);
        const response = await transporter.sendMail(mailOptions);
        console.log("Password reset email sent successfully:", response.messageId);
    } catch (error) {
        console.error("Error sending password reset email:", error);
        throw new Error(`Error sending password reset email: ${error.message}`);
    }
}

const sendResetSuccessfulEmail = async (email) => {
    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
        };

        logSendAttempt('password-reset-success', mailOptions);
        const response = await transporter.sendMail(mailOptions);
        console.log("Password reset successful email sent successfully:", response.messageId);
    } catch (error) {
        console.error("Error sending password reset successful email:", error);
        throw new Error(`Error sending password reset successful email: ${error}`);
    }
}

module.exports = { sendVerificationEmail,sendWelcomeEmail,sendPasswordResetEmail,sendResetSuccessfulEmail};

// Admin order notification
const sendOrderNotificationEmail = async (recipients, payload) => {
    console.log('[EMAIL] 📧 sendOrderNotificationEmail called for recipients:', recipients, 'customer:', payload.name);
    const itemsRows = (payload.cartItems || [])
        .map((it) => {
            const productObj = it?.productId || {};
            const id = productObj?._id || it?.productId;
            const name = it?.name || productObj?.productName || productObj?.name || 'Item';
            const qty = it?.quantity || 1;
            const price = productObj?.sellingPrice || it?.price || '';
            const base = process.env.FRONTEND_URL?.replace(/\/$/, '') || '';
            const url = id ? `${base}/product/${id}` : '';
            const priceText = price !== '' ? price : '';
            return `<tr><td>${name}</td><td>${qty}</td><td>${priceText}</td><td>${url ? `<a href="${url}">View</a>` : ''}</td></tr>`;
        })
        .join('');

    const html = ORDER_NOTIFICATION_TEMPLATE
        .replace('{name}', payload.name)
        .replace('{number}', payload.number)
        .replace('{address}', payload.address)
        .replace('{note}', payload.note || 'N/A')
        .replace('{paymentMethod}', payload.paymentMethod || 'Pay on Delivery')
        .replace('{total}', payload.total)
        .replace('{itemsRows}', itemsRows);

    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: recipients.join(', '),
            subject: `New Order from ${payload.name}`,
            html,
        };

        logSendAttempt('admin-order-notification', mailOptions);
        const response = await transporter.sendMail(mailOptions);
        console.log('Admin order notification email sent:', response.messageId);
    } catch (error) {
        console.error('Error sending admin order notification:', error);
        // Do not throw; we don't want to block user flow
    }
};

// User order confirmation email
const sendUserOrderConfirmationEmail = async (userEmail, payload) => {
    console.log('[EMAIL] 📧 sendUserOrderConfirmationEmail called for:', userEmail, 'order:', payload._id);
    const itemsRows = (payload.cartItems || [])
        .map((it) => {
            const productObj = it?.productId || {};
            const name = it?.name || productObj?.productName || productObj?.name || 'Item';
            const qty = it?.quantity || 1;
            const price = productObj?.sellingPrice || it?.price || '';
            const priceText = price !== '' ? `₦${price}` : '';
            const totalPrice = price * qty;
            return `<tr><td>${name}</td><td>${qty}</td><td>${priceText}</td><td>₦${totalPrice}</td></tr>`;
        })
        .join('');

    const html = ORDER_CONFIRMATION_EMAIL_TEMPLATE
        .replace('{name}', payload.name)
        .replace('{orderId}', payload._id)
        .replace('{address}', payload.address)
        .replace('{note}', payload.note || 'N/A')
        .replace('{paymentMethod}', payload.paymentMethod || 'Pay on Delivery')
        .replace('{total}', `₦${payload.totalPrice}`)
        .replace('{itemsRows}', itemsRows);

    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: userEmail,
            subject: "Order Confirmation - Jubiac",
            html,
        };

        logSendAttempt('user-order-confirmation', mailOptions);
        const response = await transporter.sendMail(mailOptions);
        console.log('User order confirmation email sent:', response.messageId);
    } catch (error) {
        console.error('Error sending user order confirmation email:', error);
        // Do not throw; we don't want to block user flow
    }
};

// User payment success email
const sendPaymentSuccessEmail = async (userEmail, paymentData) => {
    console.log('[EMAIL] 📧 sendPaymentSuccessEmail called for:', userEmail, 'transaction:', paymentData.transactionId);
    const orderDetails = paymentData.orderId ? `
      <h4>Order Information</h4>
      <p><strong>Order ID:</strong> ${paymentData.orderId}</p>
      <p><strong>Items:</strong> ${paymentData.itemCount || 'Multiple items'}</p>
    ` : '';

    const html = PAYMENT_SUCCESS_EMAIL_TEMPLATE
        .replace('{transactionId}', paymentData.transactionId)
        .replace('{paymentMethod}', paymentData.paymentMethod)
        .replace('{amount}', paymentData.amount)
        .replace('{paymentDate}', paymentData.paymentDate)
        .replace('{orderDetails}', orderDetails);

    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: userEmail,
            subject: "Payment Successful - Jubiac",
            html,
        };

        logSendAttempt('payment-success-user', mailOptions);
        const response = await transporter.sendMail(mailOptions);
        console.log('Payment success email sent to user:', response.messageId);
    } catch (error) {
        console.error('Error sending payment success email to user:', error);
        // Do not throw; we don't want to block the payment flow
    }
};

// Admin payment success notification
const sendPaymentSuccessNotificationToAdmin = async (paymentData) => {
    console.log('[EMAIL] 📧 sendPaymentSuccessNotificationToAdmin called for transaction:', paymentData.transactionId);
    const adminEmail = process.env.ADMIN_NOTIFICATION_EMAIL;
    if (!adminEmail) {
        console.log('ADMIN_NOTIFICATION_EMAIL not configured, skipping admin notification');
        return;
    }

    const orderDetails = paymentData.orderId ? `
      <h4>Order Information</h4>
      <p><strong>Order ID:</strong> ${paymentData.orderId}</p>
      <p><strong>Customer Email:</strong> ${paymentData.customerEmail || 'N/A'}</p>
      <p><strong>Items:</strong> ${paymentData.itemCount || 'Multiple items'}</p>
    ` : '';

    const html = PAYMENT_SUCCESS_EMAIL_TEMPLATE
        .replace('{transactionId}', paymentData.transactionId)
        .replace('{paymentMethod}', paymentData.paymentMethod)
        .replace('{amount}', paymentData.amount)
        .replace('{paymentDate}', paymentData.paymentDate)
        .replace('{orderDetails}', orderDetails);

    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: adminEmail,
            subject: `New Payment Received - ₦${paymentData.amount}`,
            html,
        };

        logSendAttempt('payment-success-admin', mailOptions);
        const response = await transporter.sendMail(mailOptions);
        console.log('Payment success notification sent to admin:', response.messageId);
    } catch (error) {
        console.error('Error sending payment success notification to admin:', error);
        // Do not throw; we don't want to block the payment flow
    }
};

// Order Status Update Email
const sendOrderStatusUpdateEmail = async (userEmail, orderData) => {
    console.log('[EMAIL] 📧 sendOrderStatusUpdateEmail called for:', userEmail, 'order:', orderData.orderId);
    const getStatusClass = (status) => {
        const statusClasses = {
            'Pending': 'pending',
            'Processing': 'processing',
            'Shipped': 'shipped',
            'Delivered': 'delivered',
            'Cancelled': 'cancelled'
        };
        return statusClasses[status] || 'pending';
    };

    const getNextSteps = (status) => {
        const steps = {
            'Pending': '<p>Your order has been received and is awaiting processing. We will update you once it starts being prepared.</p>',
            'Processing': '<p>Your order is currently being prepared. Our team is working to get it ready for shipment.</p>',
            'Shipped': '<p>Great news! Your order has been shipped and is on its way to you. You will receive tracking information soon.</p>',
            'Delivered': '<p>Your order has been successfully delivered! We hope you enjoy your purchase.</p>',
            'Cancelled': '<p>Your order has been cancelled. If you have any questions, please contact our support team.</p>'
        };
        return steps[status] || '<p>Your order status has been updated. Please check your account for more details.</p>';
    };

    const html = ORDER_STATUS_UPDATE_EMAIL_TEMPLATE
        .replace('{orderId}', orderData.orderId)
        .replace('{orderDate}', orderData.orderDate)
        .replace('{status}', orderData.status)
        .replace('{statusClass}', getStatusClass(orderData.status))
        .replace('{nextSteps}', getNextSteps(orderData.status))
        .replace('{frontendUrl}', process.env.FRONTEND_URL || 'http://localhost:5173');

    try {
        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: userEmail,
            subject: `Order Status Update - ${orderData.status} | Jubiac`,
            html,
        };

        logSendAttempt('order-status-update', mailOptions);
        const response = await transporter.sendMail(mailOptions);
        console.log('Order status update email sent to user:', response.messageId);
    } catch (error) {
        console.error('Error sending order status update email to user:', error);
        // Do not throw; we don't want to block the status update
    }
};

module.exports = {
    sendVerificationEmail,
    sendWelcomeEmail,
    sendPasswordResetEmail,
    sendResetSuccessfulEmail,
    sendOrderNotificationEmail,
    sendUserOrderConfirmationEmail,
    sendPaymentSuccessEmail,
    sendPaymentSuccessNotificationToAdmin,
    sendOrderStatusUpdateEmail
};
