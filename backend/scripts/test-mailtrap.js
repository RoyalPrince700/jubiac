// Simple Mailtrap smoke test
require('dotenv').config({ path: __dirname + '/../.env' });

const { transporter, sender } = require('../mailtrap/mailtrap.config');
const { sendOrderStatusUpdateEmail, sendOrderNotificationEmail } = require('../mailtrap/emails');

async function main() {
  const testType = process.argv[2] || 'basic'; // 'basic' or 'status-update'
  const to =
    process.env.MAILTRAP_TEST_TO ||
    process.env.ADMIN_NOTIFICATION_EMAIL ||
    process.env.MAILTRAP_FROM_EMAIL;

  if (!to) {
    console.error(
      'No recipient configured. Set MAILTRAP_TEST_TO or ADMIN_NOTIFICATION_EMAIL in .env'
    );
    process.exit(1);
  }

  console.log('[Mailtrap smoke test] About to send', {
    testType,
    to,
    from: sender.email,
    host: process.env.MAILTRAP_PROD_HOST,
    port: process.env.MAILTRAP_PROD_PORT,
    userSet: Boolean(process.env.MAILTRAP_PROD_USER),
    passSet: Boolean(process.env.MAILTRAP_PROD_PASS),
  });

  if (testType === 'status-update') {
    // Test order status update email
    console.log('[Mailtrap] Testing order status update email...');
    await sendOrderStatusUpdateEmail(to, {
      orderId: 'TEST123456',
      orderDate: new Date().toLocaleDateString(),
      status: 'Processing'
    });
    console.log('[Mailtrap smoke test] Order status update email sent!');
    process.exit(0);
  }

  if (testType === 'admin-order') {
    // Test admin order notification email
    console.log('[Mailtrap] Testing admin order notification email...');
    await sendOrderNotificationEmail([to], {
      name: 'Test Customer',
      number: '+1234567890',
      address: '123 Test Street, Test City',
      note: 'Please handle with care',
      paymentMethod: 'Flutterwave',
      total: '₦25,000',
      cartItems: [
        {
          productId: {
            _id: 'test-product-1',
            productName: 'Test Product 1',
            sellingPrice: '₦10,000'
          },
          quantity: 2
        },
        {
          productId: {
            _id: 'test-product-2',
            productName: 'Test Product 2',
            sellingPrice: '₦5,000'
          },
          quantity: 1
        }
      ]
    });
    console.log('[Mailtrap smoke test] Admin order notification email sent!');
    process.exit(0);
  }

  // Basic SMTP test
  const mailOptions = {
    from: `"${sender.name}" <${sender.email}>`,
    to,
    subject: 'Mailtrap smoke test from backend',
    html: '<h2>Mailtrap test</h2><p>If you see this, SMTP is working.</p>',
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('[Mailtrap smoke test] Sent!', {
      messageId: info.messageId,
      response: info.response,
    });
    process.exit(0);
  } catch (err) {
    console.error('[Mailtrap smoke test] Failed to send', err);
    process.exit(1);
  }
}

main();
