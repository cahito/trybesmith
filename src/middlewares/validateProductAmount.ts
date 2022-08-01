import { NextFunction, Request, Response } from 'express';
import Product from '../interfaces/products.interface';

const validateProductAmount = (req: Request, _res: Response, next: NextFunction) => {
  const data: Product = req.body;
  const { amount } = data;
  if (!amount) {
    const err = new Error('"amount" is required');
    err.name = 'BadRequest';
    throw err;
  }
  if (typeof amount !== 'string') {
    const err = new Error('"amount" must be a string');
    err.name = 'UnprocessableEntity';
    throw err;
  }
  if (amount.length < 3) {
    const err = new Error('"amount" length must be at least 3 characters long');
    err.name = 'UnprocessableEntity';
    throw err;
  }

  next();
};

export default validateProductAmount;
