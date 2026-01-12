const nodemailer = require("nodemailer");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: __dirname + '/../.env' });

// Production SMTP configuration
const transporter = nodemailer.createTransport({
    host: process.env.MAILTRAP_PROD_HOST,
    port: parseInt(process.env.MAILTRAP_PROD_PORT) || 587,
    secure: false, // true for 465, false for other ports
    auth: {
        user: process.env.MAILTRAP_PROD_USER,
        pass: process.env.MAILTRAP_PROD_PASS,
    },
});

const sender = {
    email: process.env.MAILTRAP_FROM_EMAIL || "noreply@jubiac.com",
    name: "Jubiac",
};

module.exports = { transporter, sender };
