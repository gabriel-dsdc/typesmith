import express from 'express';
import ProductController from '../controllers/product.controller';

const router = express.Router();

const productController = new ProductController();
router.post('/', (req, res) => productController.createProduct(req, res));
router.get('/', (req, res) => productController.listProducts(req, res));

export default router;
