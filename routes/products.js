const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

// get request to view all products in inventory
router.get('/', productController.getAll);
// post request to create new product
router.post('/create', productController.createProduct);
// delete request to delete product
router.delete('/:id', productController.deleteProduct);
// patch request for updating product quantity
router.patch('/:id/update_quantity/?', productController.updateProduct);

module.exports = router;