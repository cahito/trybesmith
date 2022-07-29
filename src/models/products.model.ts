import { Pool, ResultSetHeader } from 'mysql2/promise';
import Product from '../interfaces/products.interface';

export default class ProductsModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(product: Product): Promise<Product> {
    const { name, amount } = product;
    const sql = `
    INSERT INTO Trybesmith.Products (name, amount)
    VALUES (?, ?)`;
    const result = await this.connection.execute<ResultSetHeader>(sql, [name, amount]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return { id: insertId, ...product };
  }

  public async list(): Promise<Product[]> {
    const sql = `
    SELECT * FROM Trybesmith.Products`;
    const [productsList] = await this.connection.execute(sql);

    return productsList as Product[];
  }
}