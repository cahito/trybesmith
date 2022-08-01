import { NextFunction, Request, Response } from 'express';
import User from '../interfaces/users.interface';

const validateUserPassword = (req: Request, _res: Response, next: NextFunction) => {
  const data: User = req.body;
  const { password } = data;
  if (!password) {
    const err = new Error('"password" is required');
    err.name = 'BadRequest';
    throw err;
  }
  if (typeof password !== 'string') {
    const err = new Error('"password" must be a string');
    err.name = 'UnprocessableEntity';
    throw err;
  }
  if (password.length < 8) {
    const err = new Error('"password" length must be at least 8 characters long');
    err.name = 'UnprocessableEntity';
    throw err;
  }

  next();
};

export default validateUserPassword;
