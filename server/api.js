const express = require('express');
const { verifyJWT_MW } = require('./middlewares');
const {
  getAllProducts,
  addProduct,
  getProductBySlug,
  getProductById,
  updateProductById,
  deleteProductById
} = require('./controllers/product.controller');
const { login } = require('./controllers/user.controller');

const router = express.Router();

router.post('/auth/login', login);

router.get('/products', getAllProducts);
router.post('/products', verifyJWT_MW, addProduct);

router.get('/products/:id', getProductById);
router.patch('/products/:id', updateProductById);
router.delete('/products/:id', deleteProductById);
router.get('/products/detail/:slug', getProductBySlug);

module.exports = router;
