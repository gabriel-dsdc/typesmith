import { IOrder } from '../interfaces';
import connection from '../models/connection';
import OrderModel from '../models/order.model';
import UserService from './user.service';

class OrderService {
  model: OrderModel;

  userService: UserService;

  constructor() {
    this.model = new OrderModel(connection);
    this.userService = new UserService();
  }

  async listOrders(): Promise<IOrder[]> {
    const ordersList: IOrder[] = await this.model.listOrders();
    return ordersList;
  }

  async createOrder({ userId, productsIds }: IOrder): Promise<IOrder> {
    const newOrder: IOrder = await this.model.createOrder({ userId, productsIds });
    return newOrder;
  }
}

export default OrderService;
