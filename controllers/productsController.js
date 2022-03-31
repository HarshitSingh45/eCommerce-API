const Products = require('../models/products');

// finding all the products and returning in json format to user
module.exports.getAll = async(req, res) => {
    try{
        // finding all products
        let products = await Products.find({});
        return res.json({
            data: {
                products
            }
        });
    }catch(err){
        console.log(err);
        return res.json({
            message: 'Error in fetching all products'
        })
    }
    
}

// creating new product
module.exports.createProduct = async(req, res) => {
    try{
        //  creating new product
        let product = await Products.create(req.body);
        return res.json({
            data: {
                product
            }
        });
    }catch(err){
        console.log(err);
        return res.json({
            message: 'Error in creating new product'
        })
    }
    
}

// deleting a product by id, which was given by the user in params
module.exports.deleteProduct = async(req, res) => {
    try{
        // finding the product by id and deleting the product
        await Products.findByIdAndDelete(req.params.id);
        return res.json({
            data: {
                message: 'product deleted'
            }
        });
    }catch(err){
        console.log(err);
        return res.json({
            message: 'Error in deleting product'
        });
    }
    
}

// updating the quantity of product 
module.exports.updateProduct = async(req, res) => {
    try{
        // finding the product by id
        let product = await Products.findById(req.params.id);
        product.quantity = req.query.number;
        product.save();
        return res.json({
            data: {
                product
            },
            message: 'updated successfully'
        });
    }catch(err){
        console.log(err);
        return res.json({
            message: 'Error in updating the product'
        });
    }
    
}