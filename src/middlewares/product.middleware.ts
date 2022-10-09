import { Request, Response, NextFunction } from 'express';
import schemas from './schemas';

const productMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const validation = schemas.productSchema.validate(req.body);
  if (!validation.error) return next();

  const { error: { details: [{ message }] } } = validation;
  const error = message.split(', ');
  res.status(Number(error[0])).json({ message: error[1] });
};

export default productMiddleware;
