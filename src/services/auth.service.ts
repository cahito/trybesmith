import connection from '../models/connection';
import UsersModel from '../models/users.model';
import Login from '../interfaces/login.interface';
import User from '../interfaces/users.interface';

export default class AuthService {
  public model: UsersModel;

  constructor() {
    this.model = new UsersModel(connection);
  }

  public async login(data: Login): Promise<User> {
    const user = await this.model.getUserLogin(data);
    if (!user) {
      const err = new Error('Username or password invalid');
      err.name = 'Unauthorized';
      throw err;
    }

    return user;
  }
}