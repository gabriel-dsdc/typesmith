import express from 'express';
import OrderController from '../controllers/order.controller';
import orderMiddleware from '../middlewares/order.middleware';

const router = express.Router();

const orderController = new OrderController();
router.get('/', (req, res) => orderController.listOrders(req, res));
router.post('/', orderMiddleware, (req, res) => orderController.createOrder(req, res));

export default router;
