import { Pool, ResultSetHeader } from 'mysql2/promise';
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

  public async createOrderId(userId: number): Promise<Order> {
    const sql = `
    INSERT INTO Trybesmith.Orders (userId)
    VALUES (?)`;
    const [{ insertId }] = await this.connection.query<ResultSetHeader>(sql, [userId]);

    return { id: insertId, userId } as Order;
  }

  public async insertNewOrderData(newOrderId: number, productId: number): Promise<Error | boolean> {
    const sql = ` 
    UPDATE Trybesmith.Products
    SET orderId=?
    WHERE id=?`;
    const result = await this.connection.query(sql, [newOrderId, productId]);
    if (!result) {
      const err = new Error('Wrong parameters');
      err.name = 'BadRequest';
      throw err;
    }

    return true;
  }
}