import { Request, Response, NextFunction } from 'express';
import UserService from '../services/user.service';
import schemas from './schemas';

const orderMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const token = req.header('Authorization');
  if (!token) return res.status(401).json({ message: 'Token not found' });
  
  try {
    const userService = new UserService();
    const payload = userService.verifyToken(token as string);
    res.locals.payload = payload;
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  const validation = schemas.orderSchema.validate(req.body);
  if (!validation.error) return next();

  const { error: { details: [{ message }] } } = validation;
  const error = message.split(', ');
  res.status(Number(error[0])).json({ message: error[1] });
};

export default orderMiddleware;
