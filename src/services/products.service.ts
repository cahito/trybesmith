import connection from '../models/connection';
import ProductsModel from '../models/products.model';
import Product from '../interfaces/products.interface';

export default class ProductsService {
  public model: ProductsModel;

  constructor() {
    this.model = new ProductsModel(connection);
  }

  public create(product: Product): Promise<Product> {
    return this.model.create(product);
  }

  public async list(): Promise<Product[]> {
    const productsList = await this.model.list();

    return productsList;
  }
}
