const { mailtrapClient, sender } = require('./mailtrap.config');
const { VERIFICATION_EMAIL_TEMPLATE, PASSWORD_RESET_REQUEST_TEMPLATE, PASSWORD_RESET_SUCCESS_TEMPLATE, ORDER_NOTIFICATION_TEMPLATE } = require('./emailTemplates');

const sendVerificationEmail = async (email, token) => {
    try {
        const recipient = [{ email }];

        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Verify your email address",
            html: VERIFICATION_EMAIL_TEMPLATE.replace("{verificationCode}", token),
            category: "Email Verification",
        });

        console.log("Verification email sent successfully:", response);
    } catch (error) {
        console.error("Error sending verification email:", error);
        throw new Error(`Error sending verification email: ${error.message}`);
    }
};

const sendWelcomeEmail = async (email) => {
    const recipient = [{ email }];

    try {
       const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            template_uuid: "7378fb6a-b4f4-4faa-8d11-51143a4c6903",
            template_variables: {
             "company_info_name": "Jubiac",
                "email": "email"
    }
        });
        console.log("Welcome email sent successfully:", response);
    
} catch (error) {
        console.error("Error sending welcome email:", error);
        throw new Error(`Error sending welcome email: ${error.message}`);
    }
}

const sendPasswordResetEmail = async (email, resetURL) => {
    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Reset your password",
            html: PASSWORD_RESET_REQUEST_TEMPLATE.replace("{resetURL}", resetURL),
            category: "Password Reset",
        });

        console.log("Password reset email sent successfully:", response);
    } catch (error) {
        console.error("Error sending password reset email:", error);
        throw new Error(`Error sending password reset email: ${error.message}`);
    }

    
}

const sendResetSuccessfulEmail = async (email) => {

    const recipient = [{ email }];

    try {
        const response = await mailtrapClient.send({
            from: sender,
            to: recipient,
            subject: "Password Reset Successful",
            html: PASSWORD_RESET_SUCCESS_TEMPLATE,
            category: "Password Reset",
        });
        console.log("Password reset successful email sent successfully:", response);
}  catch (error) {
    console.error("Error sending password reset successful email:", error);
    throw new Error(`Error sending password reset successful email: ${error}`);
}
}

module.exports = { sendVerificationEmail,sendWelcomeEmail,sendPasswordResetEmail,sendResetSuccessfulEmail};

// Admin order notification
const sendOrderNotificationEmail = async (recipients, payload) => {
    const to = recipients.map((email) => ({ email }));

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
        const response = await mailtrapClient.send({
            from: sender,
            to,
            subject: `New Order from ${payload.name}`,
            html,
            category: 'New Order',
        });
        console.log('Admin order notification email sent:', response);
    } catch (error) {
        console.error('Error sending admin order notification:', error);
        // Do not throw; we don't want to block user flow
    }
};

module.exports.sendOrderNotificationEmail = sendOrderNotificationEmail;
