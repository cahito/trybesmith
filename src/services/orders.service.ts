import connection from '../models/connection';
import OrdersModel from '../models/orders.model';
import Order from '../interfaces/orders.interface';
import NewOrder from '../interfaces/newOrder.interface';
import getUserIdFromToken from '../middlewares/getUserIdFromToken';

export default class OrdersService {
  public model: OrdersModel;

  constructor() {
    this.model = new OrdersModel(connection);
  }

  public async list(): Promise<Order[]> {
    const ordersList = await this.model.list();

    return ordersList;
  }

  public async create(productsIds: number[], token: string): Promise<NewOrder> {
    const userId = getUserIdFromToken(token);
    const newOrderId = await this.model.createOrderId(userId);
    const nOI = Number(newOrderId.id);
    await Promise
      .all(productsIds
        .map((productId) => this.model.insertNewOrderData(nOI, productId)));
    const newOrder = { userId, productsIds };

    return newOrder;
  }
}