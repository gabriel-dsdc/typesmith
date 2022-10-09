import express from 'express';
import OrderController from '../controllers/order.controller';

const router = express.Router();

const orderController = new OrderController();
router.get('/', (req, res) => orderController.listOrders(req, res));

export default router;
