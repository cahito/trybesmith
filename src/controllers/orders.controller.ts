import { Request, Response } from 'express';
import OrdersService from '../services/orders.service';

export default class OrdersController {
  constructor(private ordersService = new OrdersService()) {}

  public list = async (_req: Request, res: Response) => {
    const ordersList = await this.ordersService.list();

    res.status(200).json(ordersList);
  };
} 