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

const sendWelcomeEmail = async (email, name = 'there') => {
    console.log('[PRODUCTION EMAIL] 📧 sendWelcomeEmail called for:', email, 'name:', name);
    console.log('[PRODUCTION EMAIL] 🔧 Mailtrap config check - host:', process.env.MAILTRAP_PROD_HOST, 'user exists:', !!process.env.MAILTRAP_PROD_USER);
    try {
        const personalizedGreeting = name !== 'there' ? `Hi ${name}!` : 'Hello there!';
        const frontendUrl = process.env.FRONTEND_URL || 'https://jubiac.vercel.app'; // Default to Vercel URL
        console.log("[EMAIL] 📧 Using frontend URL for welcome email:", frontendUrl);

        const html = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Welcome to Jubiac!</title>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f4f4f4; }
    .container { background: white; padding: 30px; border-radius: 10px; box-shadow: 0 2px 10px rgba(0,0,0,0.1); }
    .header { background: linear-gradient(to right, #10B981, #059669); padding: 20px; text-align: center; color: white; border-radius: 8px 8px 0 0; margin: -30px -30px 20px -30px; }
    .welcome-icon { font-size: 48px; color: #10B981; text-align: center; margin: 10px 0; }
    .cta-button { display: inline-block; padding: 12px 24px; background-color: #10B981; color: white; text-decoration: none; border-radius: 6px; margin: 20px 0; }
    .footer { text-align: center; color: #6B7280; font-size: 12px; margin-top: 30px; padding-top: 20px; border-top: 1px solid #E5E7EB; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <div class="welcome-icon">🎉</div>
      <h1>Welcome to Jubiac!</h1>
      <p>Your journey to amazing food starts here</p>
    </div>

    <h2>${personalizedGreeting}</h2>

    <p>Thank you for joining the Jubiac community! We're thrilled to have you with us.</p>

    <p>Here's what you can do to get started:</p>

    <ul>
      <li><strong>Browse our menu</strong> - Discover delicious meals from top restaurants</li>
      <li><strong>Place your first order</strong> - Fast, reliable delivery to your doorstep</li>
      <li><strong>Track your orders</strong> - Real-time updates on your delivery status</li>
      <li><strong>Earn rewards</strong> - Get points on every order for future discounts</li>
    </ul>

    <div style="text-align: center; margin: 30px 0;">
      <a href="${frontendUrl}" class="cta-button">Start Exploring</a>
    </div>

    <p>If you have any questions, feel free to reach out to our support team. We're here to help!</p>

    <p>Welcome aboard,<br>The Jubiac Team</p>
  </div>

  <div class="footer">
    <p>This is an automated welcome message from Jubiac. Please do not reply to this email.</p>
  </div>
</body>
</html>`;

        const mailOptions = {
            from: `"${sender.name}" <${sender.email}>`,
            to: email,
            subject: "🎉 Welcome to Jubiac - Your Food Journey Begins!",
            html,
        };

        logSendAttempt('welcome', mailOptions);
        console.log("[EMAIL] 🚀 About to send welcome email via transporter...");
        const response = await transporter.sendMail(mailOptions);
        console.log("[EMAIL] ✅ Welcome email sent successfully:", response.messageId);
        return response;
    } catch (error) {
        console.error("[EMAIL] ❌ Error sending welcome email:", error);
        console.error("[EMAIL] ❌ Error details:", {
            message: error.message,
            code: error.code,
            command: error.command,
            errno: error.errno
        });
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
