import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import Order from '../interfaces/orders.interface';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async list(): Promise<Order[]> {
    const ordersList = await this.model.list();
    console.log('Service', ordersList);
    return ordersList;
  }
}