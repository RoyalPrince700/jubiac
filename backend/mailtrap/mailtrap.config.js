const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// Load environment variables - search in current and parent dirs
dotenv.config();
dotenv.config({ path: '../.env' });

const isProd = process.env.NODE_ENV === 'production';

// Production SMTP configuration
// Mailtrap Sending: host is usually 'send.smtp.mailtrap.io' or 'live.smtp.mailtrap.io'
// Port options: 587 (TLS), 465 (SSL), 2525 (Alternative TLS)
const host = process.env.MAILTRAP_PROD_HOST || 'live.smtp.mailtrap.io';
const port = parseInt(process.env.MAILTRAP_PROD_PORT) || 2525; // Defaulting to 2525 as it's often more reliable on cloud providers
const user = process.env.MAILTRAP_PROD_USER;
const pass = process.env.MAILTRAP_PROD_PASS;

const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465, // true for 465, false for other ports
    auth: {
        user,
        pass,
    },
    // Increased connection timeout for cloud provider reliability
    connectionTimeout: 30000, // 30 seconds
    greetingTimeout: 30000,
    socketTimeout: 30000,
});

// Use either MAILTRAP_FROM_EMAIL or MAILTRAP_FROM
const fromEmail = process.env.MAILTRAP_FROM_EMAIL || process.env.MAILTRAP_FROM || "noreply@jubiac.com";

// Debug the mailer configuration (safe values only)
console.log('[MAILTRAP CONFIG]', {
    environment: process.env.NODE_ENV || 'development',
    host,
    port,
    secure: port === 465,
    userSet: Boolean(user),
    passSet: Boolean(pass),
    fromEmail: fromEmail
});

// Verify the connection on startup (non-blocking)
if (user && pass) {
    transporter.verify((error, success) => {
        if (error) {
            console.error('[MAILTRAP ERROR] Connection verification failed:', error.message);
        } else {
            console.log('[MAILTRAP SUCCESS] Server is ready to take our messages');
        }
    });
} else {
    console.warn('[MAILTRAP WARNING] SMTP credentials missing. Emails will fail to send.');
}

const sender = {
    email: fromEmail,
    name: "Jubiac",
};

module.exports = { transporter, sender };
