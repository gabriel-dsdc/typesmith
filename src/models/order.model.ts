import { Pool, RowDataPacket } from 'mysql2/promise';
import { IOrder } from '../interfaces';

class OrderModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async listOrders(): Promise<IOrder[]> {
    const [ordersList] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT o.id, userId, JSON_ARRAYAGG(p.id) as productsIds FROM Trybesmith.Orders o
      INNER JOIN Trybesmith.Products p ON p.orderId = o.id
      GROUP BY o.id`,
    );
    return ordersList;
  }
}

export default OrderModel;
