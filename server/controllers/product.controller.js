const Product = require('../models/product');
const generateSlug = require('../helpers/generateSlug');

const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find().sort('-created_at').exec();
    res.json({
      status: 200,
      products,
    });
  } catch (e) {
    res.json({
      status: 400,
      message: 'Can not get list products',
    })
  }
}

const addProduct = async (req, res) => {
  try {
    const { ...data } = req.body;
    data.slug = generateSlug(data.name);
    const product = await Product.create(data);
    res.json({
      status: 200,
      product,
    });
  } catch (e) {
    res.json({
      status: 400,
      message: 'Can not add new product',
    })
  }
}

const getProductBySlug = async (req, res) => {
  try {
    const { slug } = req.params;
    const product = await Product.findOne({ slug }).exec();
    if (!product) {
      return res.json({
        status: 404,
        message: 'Product not found',
      })
    }
    const featureProducts = await Product.find().limit(4).exec();
    res.json({
      status: 200,
      product,
      featureProducts,
    });
  } catch (e) {
    res.json({
      status: 400,
      message: 'Can not get product detail',
    })
  }
}

const getProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id).exec();
    if (!product) {
      return res.json({
        status: 404,
        message: 'Product not found',
      })
    }
    res.json({
      status: 200,
      product,
    });
  } catch (e) {
    res.json({
      status: 400,
      message: 'Can not get product detail',
    })
  }
}

const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { ...data } = req.body;
    if (data.name) data.slug = generateSlug(data.name);
    const product = await Product.update({ _id: id }, { ...data }).exec();
    if (!product) {
      return res.json({
        status: 404,
        message: 'Product not found',
      })
    }
    res.json({
      status: 200,
      product: await Product.findById(id).exec(),
    });
  } catch (e) {
    res.json({
      status: 400,
      message: 'Can not update product',
    })
  }
}

const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    await Product.remove({ _id: id }).exec();
    res.json({
      status: 200
    });
  } catch (e) {
    res.json({
      status: 400,
      message: 'Can not delete product',
    })
  }
}

module.exports = {
  getAllProducts,
  addProduct,
  getProductBySlug,
  getProductById,
  updateProductById,
  deleteProductById
}