const mongoose = require('mongoose');

// schema for product
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    quantity: {
        type: Number,
        required: true
    }
});

// collection
const Products = mongoose.model('Products', productSchema);
module.exports = Products;