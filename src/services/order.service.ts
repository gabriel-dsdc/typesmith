import { IOrder } from '../interfaces';
import connection from '../models/connection';
import OrderModel from '../models/order.model';

class OrderService {
  model: OrderModel;

  constructor() {
    this.model = new OrderModel(connection);
  }

  async listOrders(): Promise<IOrder[]> {
    const ordersList: IOrder[] = await this.model.listOrders();
    return ordersList;
  }
}

export default OrderService;
