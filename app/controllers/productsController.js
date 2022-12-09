import { httpError } from '../helpers/handleError.js';
import productsModel from '../models/products.js';

/**
 * It's an async function that uses the productsModel to find all products and then sends a response
 * with a message and the products.
 * @param req - The request object.
 * @param res - The response object.
 */
const getProducts = async (req, res) => {
  try {
    const products = await productsModel.find();
    res.status(200).json({ message: 'Get all products.', products });
  } catch (err) {
    httpError(res, err);
  }
};
/************************************************************************* */

/**
 * It gets a product by id.
 * @param req - The request object.
 * @param res - the response object
 */
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await productsModel.findById(id);
    res.status(200).json({ message: 'Get a product.', product });
  } catch (err) {
    httpError(res, err);
  }
};

/******************************************************************************* */

/**
 * It creates a new product in the database
 * @param req - {
 * @param res - response object
 */
const createProduct = async (req, res) => {
  try {
    const { name, price, description, category, primaryImage, images } =
      req.body;
    const newProduct = await productsModel.create({
      name,
      price,
      description,
      category,
      primaryImage,
      images,
    });

    res.status(201).json({ message: 'Product created.', newProduct });
  } catch (err) {
    httpError(res, err);
  }
};

/******************************************************************************* */

/**
 * It updates a product in the database
 * @param req - {
 * @param res - response object
 */
const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price, description, category, primaryImage, images } =
      req.body;
    let updatedProduct = await productsModel.findByIdAndUpdate(
      id,
      {
        name,
        price,
        description,
        category,
        primaryImage,
        images,
      },
      { new: true }
    );
    res.status(200).json({ message: 'Product updated.', updatedProduct });
  } catch (err) {
    httpError(res, err);
  }
};

/******************************************************************************* */

/**
 * It deletes a product from the database.
 * @param req - The request object.
 * @param res - the response object
 */
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await productsModel.findByIdAndDelete(id);
    res.status(200).json({ message: 'Product deleted.', deletedProduct });
  } catch (err) {
    httpError(res, err);
  }

};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
