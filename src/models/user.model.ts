import { Pool, ResultSetHeader } from 'mysql2/promise';
import { IUser } from '../interfaces';

class UserModel {
  connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  async createUser({ username, classe, level, password }: IUser) {
    const [{ insertId: id }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users (username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    return { id, username };
  }
}

export default UserModel;
