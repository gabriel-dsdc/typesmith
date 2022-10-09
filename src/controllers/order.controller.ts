import { Request, Response } from 'express';
import { IOrder } from '../interfaces';
import OrderService from '../services/order.service';

class OrderController {
  service: OrderService;

  constructor() {
    this.service = new OrderService();
  }

  async listOrders(_req: Request, res: Response) {
    const ordersList: IOrder[] = await this.service.listOrders();
    res.status(200).json(ordersList);
  }
}

export default OrderController;
