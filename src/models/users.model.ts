import { Pool, ResultSetHeader } from 'mysql2/promise';
import Login from '../interfaces/login.interface';
import User from '../interfaces/users.interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(user: User): Promise<User> {
    const { username, classe, level, password } = user;
    const sql = `
    INSERT INTO Trybesmith.Users (username, classe, level, password)
    VALUES (?, ?, ?, ?)`;
    const result = await this.connection
      .execute<ResultSetHeader>(sql, [username, classe, level, password]);
    const [dataInserted] = result;
    const { insertId } = dataInserted;

    return { id: insertId, ...user };
  }

  public async getUserLogin(data: Login): Promise<User> {
    const { username, password } = data;
    const sql = `
    SELECT * FROM Trybesmith.Users
    WHERE username=? AND password=?`;
    const [rows] = await this.connection.execute(sql, [username, password]);
    const [user] = rows as User[];

    return user;
  }
}
