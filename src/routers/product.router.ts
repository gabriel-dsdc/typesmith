import express from 'express';
import ProductController from '../controllers/product.controller';
import productMiddleware from '../middlewares/product.middleware';

const router = express.Router();

const productController = new ProductController();
router.post('/', productMiddleware, (req, res) => productController.createProduct(req, res));
router.get('/', (req, res) => productController.listProducts(req, res));

export default router;
