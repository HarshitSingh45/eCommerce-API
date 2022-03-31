const express = require('express');
const router = express.Router();
const productController = require('../controllers/productsController');

router.get('/', productController.getAll);
router.post('/create', productController.createProduct);
router.delete('/:id', productController.deleteProduct);
router.patch('/:id/update_quantity/?', productController.updateProduct);

module.exports = router;