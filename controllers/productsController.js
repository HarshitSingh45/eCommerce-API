const Products = require('../models/products');

module.exports.getAll = async(req, res) => {
    let products = await Products.find({});
    return res.json({
        data: {
            products
        }
    });
}

module.exports.createProduct = async(req, res) => {
    let product = await Products.create(req.body);
    return res.json({
        data: {
            product
        }
    })
}

module.exports.deleteProduct = async(req, res) => {
    await Products.findByIdAndDelete(req.params.id);
    return res.json({
        data: {
            message: 'product deleted'
        }
    });
}

module.exports.updateProduct = async(req, res) => {
    let product = await Products.findById(req.params.id);
    product.quantity = req.query.number;
    product.save();
    return res.json({
        data: {
            product
        },
        message: 'updated successfully'
    })
}