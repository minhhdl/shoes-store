const mongoose = require('mongoose');

const schema = mongoose.Schema({
  slug: {
    type: String,
    unique: true,
  },
  name: String,
  images: Array,
  cover: String,
  price: Number,
  sale_price: Number,
  short_description: String,
  description: String,
});

const Product = new mongoose.model('Product', schema);

module.exports = Product;