const mongoose = require('mongoose');

// creating schema for product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
});

// creating a model of productSchema
const Product = mongoose.model('Product', productSchema);

module.exports = Product;