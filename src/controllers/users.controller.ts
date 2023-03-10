import { Request, Response } from 'express';
import UsersService from '../services/users.service';
import createToken from '../middlewares/createToken';

export default class UsersController {
  constructor(private usersService = new UsersService()) {}

  public create = async (req: Request, res: Response) => {
    const user = req.body;
    const userCreated = await this.usersService.create(user);
    const token = createToken(userCreated);

    res.status(201).json({ token });
  };
}