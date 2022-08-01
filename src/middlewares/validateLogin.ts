import { NextFunction, Request, Response } from 'express';
import Login from '../interfaces/login.interface';

const validateLogin = (req: Request, _res: Response, next: NextFunction) => {
  const data: Login = req.body;
  const { username, password } = data;
  if (!username) {
    const err = new Error('"username" is required');
    err.name = 'BadRequest';
    throw err;
  }
  if (!password) {
    const err = new Error('"password" is required');
    err.name = 'BadRequest';
    throw err;
  }
  if (typeof username !== 'string' || typeof password !== 'string') {
    const err = new Error('Username or password invalid');
    err.name = 'Unauthorized';
    throw err;
  }

  next();
};

export default validateLogin;
