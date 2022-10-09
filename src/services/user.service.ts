import jwt from 'jsonwebtoken';
import { IUser } from '../interfaces';
import connection from '../models/connection';
import UserModel from '../models/user.model';

class UserService {
  model: UserModel;

  JWT_SECRET: string | undefined;

  constructor() {
    this.model = new UserModel(connection);
    this.JWT_SECRET = process.env.JWT_SECRET;
  }

  generateToken(payload: IUser) {
    const token = jwt.sign(payload, this.JWT_SECRET || 'secret');
    return token;
  }

  async createUser({ username, classe, level, password }: IUser) {
    const newUser = await this.model.createUser({ username, classe, level, password });
    const token = this.generateToken(newUser);
    return token;
  }
}

export default UserService;
