import { Pool } from 'mysql2/promise';
import Order from '../interfaces/orders.interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async list(): Promise<Order[]> {
    const sql = `
    SELECT o.id, o.userId, JSON_ARRAYAGG(p.id) as 'productsIds'
    FROM Orders as o
    INNER JOIN Products as p
    ON o.id=p.orderId
    GROUP BY o.id
    ORDER BY o.id;`;
    const [ordersList] = await this.connection.execute(sql);
    console.log('Model', ordersList);
    return ordersList as Order[];
  }
}