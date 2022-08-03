import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public list = async (_req: Request, res: Response) => {
    const ordersList = await this.ordersService.list();

    res.status(200).json(ordersList);
  };

  public create = async (req: Request, res: Response) => {
    const token = req.headers.authorization;
    if (!token) {
      const err = new Error('Token not found');
      err.name = 'Unauthorized';
      throw err;
    }
    const { productsIds } = req.body;
    const newOrder = await this.ordersService.create(productsIds, token);

    res.status(201).json(newOrder);
  };
}
