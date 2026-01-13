// Simple Mailtrap smoke test
require('dotenv').config({ path: __dirname + '/../.env' });

const { transporter, sender } = require('../mailtrap/mailtrap.config');
const { sendOrderStatusUpdateEmail, sendOrderNotificationEmail, sendWelcomeEmail } = require('../mailtrap/emails');

async function main() {
  const testType = process.argv[2] || 'basic'; // 'basic', 'status-update', 'admin-order', 'welcome'
  const to =
    process.argv[3] ||
    process.env.MAILTRAP_TEST_TO ||
    process.env.ADMIN_NOTIFICATION_EMAIL ||
    process.env.MAILTRAP_FROM_EMAIL;

  if (!to) {
    console.error(
      'No recipient configured. Set MAILTRAP_TEST_TO or ADMIN_NOTIFICATION_EMAIL in .env, or pass as argument'
    );
    console.log('Usage: node test-mailtrap.js [testType] [recipientEmail]');
    process.exit(1);
  }

  console.log('[Mailtrap smoke test] Starting test...', {
    testType,
    to,
    from: sender.email
  });

  try {
    if (testType === 'status-update') {
      console.log('[Mailtrap] Testing order status update email...');
      await sendOrderStatusUpdateEmail(to, {
        orderId: 'TEST123456',
        orderDate: new Date().toLocaleDateString(),
        status: 'Processing'
      });
    } else if (testType === 'admin-order') {
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
          }
        ]
      });
    } else if (testType === 'welcome') {
      console.log('[Mailtrap] Testing welcome email...');
      await sendWelcomeEmail(to, 'Test User');
    } else {
      // Basic SMTP test
      const mailOptions = {
        from: `"${sender.name}" <${sender.email}>`,
        to,
        subject: 'Mailtrap Basic SMTP test',
        html: '<h2>Mailtrap test</h2><p>If you see this, SMTP is working.</p>',
      };
      const info = await transporter.sendMail(mailOptions);
      console.log('[Mailtrap smoke test] Basic send success:', info.messageId);
    }
    
    console.log(`[Mailtrap smoke test] SUCCESS: ${testType} email sent to ${to}`);
    // Wait a bit for the verify callback from config if any
    setTimeout(() => process.exit(0), 1000);
  } catch (err) {
    console.error('[Mailtrap smoke test] FAILED', err);
    process.exit(1);
  }
}

main();
