import { Request, Response } from 'express';
import validateLogin from '../middlewares/validateLogin';
import createToken from '../middlewares/createToken';
import User from '../interfaces/users.interface';
import AuthService from '../services/auth.service';

export default class AuthController {
  constructor(private authService = new AuthService()) {}

  public login = async (req: Request, res: Response) => {
    validateLogin(req.body);
    const userLogin: User = await this.authService.login(req.body);
    const token = createToken(userLogin);
    
    res.status(200).json({ token });
  };
}
