const bcrypt = require('bcrypt');
const products = require('./products');
const User = require('./models/user');
const Product = require('./models/product');

const initAdministrator = async () => {
  const password = await bcrypt.hash('admin', 10);
  const adminInfo = {
    username: 'admin',
    password,
    name: 'Administrator',
  };

  const admin = await User.findOne({ username: adminInfo.username }).exec();
  if (!admin) await User.create(adminInfo);
}

const initProducts = async () => {
  products.map(async product => {
    const existProduct = await Product.findOne({ slug: product.slug }).exec();
    if (!existProduct) await Product.create(product);
  })
}

module.exports = async () => {
  await initAdministrator();
  await initProducts();
}