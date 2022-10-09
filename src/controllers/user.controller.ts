import { Request, Response } from 'express';
import UserService from '../services/user.service';

class UserController {
  service: UserService;

  constructor() {
    this.service = new UserService();
  }

  async createUser(req: Request, res: Response) {
    const { username, classe, level, password } = req.body;
    const token = await this.service.createUser({ username, classe, level, password });

    res.status(201).json({ token });
  }
}

export default UserController;
