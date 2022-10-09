import { Request, Response, NextFunction } from 'express';
import schemas from './schemas';

const loginMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const validation = schemas.loginSchema.validate(req.body);
  if (!validation.error) return next();

  const { error: { details: [{ message }] } } = validation;
  res.status(400).json({ message });
};

const userMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const validation = schemas.userSchema.validate(req.body);
  if (!validation.error) return next();

  const { error: { details: [{ message }] } } = validation;
  const error = message.split(', ');
  res.status(Number(error[0])).json({ message: error[1] });
};

export {
  loginMiddleware,
  userMiddleware,
};
