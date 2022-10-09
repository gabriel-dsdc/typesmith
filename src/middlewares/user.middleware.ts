import { Request, Response, NextFunction } from 'express';
import schemas from './schemas';

const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const validation = schemas.loginSchema.validate(req.body);
  if (!validation.error) return next();

  const { error: { details: [{ message }] } } = validation;
  res.status(400).json({ message });
};

export default userMiddleware;
