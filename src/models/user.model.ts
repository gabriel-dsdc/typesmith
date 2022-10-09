import { Pool, ResultSetHeader, RowDataPacket } from 'mysql2/promise';
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

  async login({ username, password }: IUser) {
    const [[userFound]] = await this.connection.execute<IUser[] & RowDataPacket[]>(
      'SELECT id, username FROM Trybesmith.Users WHERE username = ? AND password = ?',
      [username, password],
    );
    return userFound;
  }
}

export default UserModel;
