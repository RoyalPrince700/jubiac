const mongoose = require('mongoose');

const foodOrderSchema = mongoose.Schema({
    vendorId: { type: String, required: true }, // Vendor's unique ID
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // User placing the order
    items: [
        {
            productName: { type: String, required: true },
            customizations: [String], // Array of custom options
            quantity: { type: Number, required: true, default: 1 },
            price: { type: Number, required: true } // Price for the item including customizations
        }
    ],
    totalAmount: { type: Number, required: true }, // Total price of the order
    status: { type: String, enum: ['Pending', 'Confirmed', 'Completed'], default: 'Pending' }
}, { timestamps: true });

module.exports = mongoose.model('FoodOrder', foodOrderSchema);
