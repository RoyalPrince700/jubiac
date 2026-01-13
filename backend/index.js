const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const passport = require('passport');
require('./config/passport');
const router = require('./routes');
const { createServer } = require('http');
const initializeSocket = require('./config/socket');

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI)
    .then(() => console.log('Connected to DB'))
    .catch(err => {
        console.error('MongoDB connection error:', err);
        process.exit(1); // Exit if unable to connect
    });

const app = express();
const server = createServer(app);

// Initialize Socket.IO
const io = initializeSocket(server);

// Middleware
const corsOptions = {
    origin: function (origin, callback) {
        // Allow requests with no origin (like mobile apps or curl requests)
        if (!origin) return callback(null, true);
        
        const allowedOrigins = [
            'https://www.jubiac.com',
            'https://jubiac.com',
            'https://jubiac.vercel.app',
            'https://jubiac-backend.vercel.app', // Backend domain (in case of same-origin requests)
            'http://localhost:5173',
            'http://localhost:3000',
            'http://localhost:8080'
        ];
        
        // Add environment variable origin if it exists
        if (process.env.FRONTEND_URL) {
            allowedOrigins.push(process.env.FRONTEND_URL);
        }
        
        if (allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            console.log('CORS blocked origin:', origin);
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'Cookie'],
    optionsSuccessStatus: 200 // Some legacy browsers choke on 204
};

app.use(cors(corsOptions));

// Additional CORS headers middleware (backup)
app.use((req, res, next) => {
    const origin = req.headers.origin;
    const allowedOrigins = [
        'https://www.jubiac.com',
        'https://jubiac.com',
        'https://jubiac.vercel.app',
        'http://localhost:5173',
        process.env.FRONTEND_URL
    ].filter(Boolean);

    if (allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
    }
    
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, Cookie');
    
    if (req.method === 'OPTIONS') {
        res.sendStatus(200);
    } else {
        next();
    }
});

app.use(express.json());
app.use(cookieParser());
app.use(passport.initialize());

// Make io available to routes
app.set('io', io);
app.use("/api", router);

// Start the server
const PORT = process.env.PORT || 8080;

// Debug production environment variables (safe values only)
console.log('[PRODUCTION DEBUG] Environment check:', {
    NODE_ENV: process.env.NODE_ENV,
    PORT: PORT,
    FRONTEND_URL: process.env.FRONTEND_URL,
    MAILTRAP_PROD_HOST: process.env.MAILTRAP_PROD_HOST,
    MAILTRAP_PROD_PORT: process.env.MAILTRAP_PROD_PORT,
    MAILTRAP_PROD_USER_SET: !!process.env.MAILTRAP_PROD_USER,
    MAILTRAP_PROD_PASS_SET: !!process.env.MAILTRAP_PROD_PASS,
    MAILTRAP_FROM_EMAIL: process.env.MAILTRAP_FROM_EMAIL,
    ADMIN_NOTIFICATION_EMAIL: process.env.ADMIN_NOTIFICATION_EMAIL,
    ADMINEMAIL1: process.env.ADMINEMAIL1,
    MONGODB_URI_SET: !!process.env.MONGODB_URI,
    TOKEN_SECRET_KEY_SET: !!process.env.TOKEN_SECRET_KEY
});

server.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
