import { NextFunction, Request, Response } from 'express';
import Product from '../interfaces/products.interface';

const validateProductName = (req: Request, _res: Response, next: NextFunction) => {
  const data: Product = req.body;
  const { name } = data;
  if (!name) {
    const err = new Error('"name" is required');
    err.name = 'BadRequest';
    throw err;
  }
  if (typeof name !== 'string') {
    const err = new Error('"name" must be a string');
    err.name = 'UnprocessableEntity';
    throw err;
  }
  if (name.length < 3) {
    const err = new Error('"name" length must be at least 3 characters long');
    err.name = 'UnprocessableEntity';
    throw err;
  }

  next();
};

export default validateProductName;
