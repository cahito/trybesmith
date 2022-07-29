import connection from '../models/connection';
import UsersModel from '../models/users.model';
import User from '../interfaces/users.interface';

export default class UsersService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public create(user: User): Promise<User> {
    return this.model.create(user);
  }
}