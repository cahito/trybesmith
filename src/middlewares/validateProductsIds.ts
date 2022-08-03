import { NextFunction, Request, Response } from 'express';
import NewOrder from '../interfaces/newOrder.interface';

const validateProductsIds = (req: Request, _res: Response, next: NextFunction) => {
  const { productsIds }: NewOrder = req.body;
  if (!productsIds) {
    const err = new Error('"productsIds" is required');
    err.name = 'BadRequest';
    throw err;
  }
  if (!Array.isArray(productsIds)) {
    const err = new Error('"productsIds" must be an array');
    err.name = 'UnprocessableEntity';
    throw err;
  }
  if (productsIds.length < 1) {
    const err = new Error('"productsIds" must include only numbers');
    err.name = 'UnprocessableEntity';
    throw err;
  }

  next();
};

export default validateProductsIds;
