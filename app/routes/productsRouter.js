import express from 'express';
import {
  getProducts,
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
} from '../controllers/productsController.js';

const routerProducts = express.Router();

routerProducts.get('/', getProducts);

routerProducts.get('/:id', getProduct);

routerProducts.post('/', createProduct);

routerProducts.patch('/:id', updateProduct);

routerProducts.delete('/:id', deleteProduct);

export default routerProducts;
