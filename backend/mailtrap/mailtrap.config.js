const { MailtrapClient } = require("mailtrap");
const dotenv = require("dotenv");

// Load environment variables
dotenv.config({ path: __dirname + '/../.env' });

const TOKEN = process.env.MAILTRAP_TOKEN;
const ENDPOINT = process.env.MAILTRAP_ENDPOINT;

const mailtrapClient = new MailtrapClient({
    endpoint: ENDPOINT,
    token: TOKEN,
});

const sender = {
    email: "hello@jubiac.com",
    name: "Jubiac",
};

module.exports = { mailtrapClient, sender };
