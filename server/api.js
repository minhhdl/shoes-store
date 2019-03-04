const express = require('express');
const products = require('./products');

const router = express.Router();

router.get('/products', (req, res) => {
  return res.json({
    status: 200,
    data: products,
  });
});

router.get('/products/:slug', (req, res) => {
  const { slug } = req.params;
  const product = products.filter(item => item.slug === slug);

  if (product.length > 0) {
    return res.json({
      status: 200,
      data: {
        product: product[0],
        featureProducts: products.slice(0, 4),
      },
    });  
  }

  return res.json({
    status: 404,
    data: null,
    message: 'product_not_found',
  });
});

module.exports = router;
