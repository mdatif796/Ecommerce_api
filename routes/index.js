const express = require('express');
const router = express.Router();

const productControllers = require('../controllers/productControllers');

router.post('/products/create', productControllers.createProduct);
router.get('/products', productControllers.allProducts);
router.delete('/products/:id', productControllers.deleteProduct);
router.post('/products/:id/update_quantity/', productControllers.updateProduct);

module.exports = router;