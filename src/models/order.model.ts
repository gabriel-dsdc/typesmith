import { Pool, RowDataPacket, ResultSetHeader } from 'mysql2/promise';
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

  async createOrder({ userId, productsIds }: IOrder): Promise<IOrder> {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );

    await Promise.all(productsIds.map((productId: number) => (
      this.connection.execute<ResultSetHeader>(
        'UPDATE Trybesmith.Products SET orderId = ? WHERE id = ?',
        [insertId, productId],
      ))));
    return {
      userId,
      productsIds,
    };
  }
}

export default OrderModel;
