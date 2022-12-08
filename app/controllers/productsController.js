import { httpError } from "../helpers/handleError.js";
import productsModel from "../models/products.js";

const getProducts = async (req, res) => {
  try {
    const products = await productsModel.find();
    res.status(200).json({ message: 'Get all products.', products });
  } catch (err) {
    httpError(res, err);
  }
};

const getProduct = (req, res) => {
  res.status(200).json({ message: 'Get a product.' });
};

const createProduct = async (req, res) => {
  try {
    const { name, price, description, category ,primaryImage,images } = req.body;
    const newProduct = await productsModel.create({
      name,
      price,
      description,
      category,
      primaryImage,
      images

    });
    


    res.status(201).json({ message: 'Product created.', newProduct });
  } catch (err) {
    httpError(res, err);
  }
  }


const updateProduct = (req, res) => {
  res.status(200).json({ message: 'Update a product.' });
};

const deleteProduct = (req, res) => {
  res.status(200).json({ message: 'Delete a product.' });
};

export { getProducts, getProduct, createProduct, updateProduct, deleteProduct };
