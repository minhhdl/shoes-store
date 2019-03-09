const nextRoutes = require('next-routes');

const routes = (module.exports = nextRoutes());

routes.add('product', '/product/:slug');

routes.add('adminProduct', '/admin/products/:productId/detail', '/admin/products/detail');
routes.add('adminEditProduct', '/admin/products/:productId/edit', '/admin/products/edit');