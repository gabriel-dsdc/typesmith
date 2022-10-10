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

  async createOrder(req: Request, res: Response) {
    const { id: userId }: IOrder = res.locals.payload;
    const { productsIds }: IOrder = req.body;

    const newOrder: IOrder = await this.service.createOrder({ userId, productsIds });
    res.status(201).json(newOrder);
  }
}

export default OrderController;
