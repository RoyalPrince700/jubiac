const mongoose = require('mongoose');


const vendorMenuSchema = mongoose.Schema({
    vendorId: { type: String, required: true },
    menu: [
        {
            productName: String,
            description: String,
            price: Number,
            customizations: [String]
        }
    ]
});

module.exports = mongoose.model('VendorMenu', vendorMenuSchema);
