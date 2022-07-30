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
    FROM Trybesmith.Orders as o
    INNER JOIN Trybesmith.Products as p
    ON o.id=p.orderId
    GROUP BY p.orderId
    ORDER BY o.userId;`;
    const [ordersList] = await this.connection.query(sql);

    return ordersList as Order[];
  }
}