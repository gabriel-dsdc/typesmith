import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
import { IProduct } from '../interfaces';

class ProductModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createProduct({ name, amount }: IProduct) {
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id, name, amount };
  }

  async listProducts(): Promise<IProduct[]> {
    const [productsList] = await this.connection.execute<(IProduct[] & RowDataPacket[])>(
      'SELECT * FROM Trybesmith.Products');
    return productsList;
  }
}

// class ProductModel {
//   createProduct = async ({ name, amount }: IProduct) => {
//     const [{ insertId: id }] = await connection.execute<ResultSetHeader>(`
//     INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)`, [name, amount]);
//     return { id, name, amount };
//   };
// }

export default ProductModel;
