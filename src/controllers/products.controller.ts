import { Request, Response } from 'express';
import validateProductAmount from '../middlewares/validateProductAmount';
import validateProductName from '../middlewares/validateProductName';
import ProductsService from '../services/products.service';

export default class ProductsController {
  constructor(private productsService = new ProductsService()) {}

  public create = async (req: Request, res: Response) => {
    const product = req.body;
    validateProductName(product);
    validateProductAmount(product);
    const productCreated = await this.productsService.create(product);

    res.status(201).json(productCreated);
  };

  public list = async (_req: Request, res: Response) => {
    const productsList = await this.productsService.list();

    res.status(200).json(productsList);
  };
}
