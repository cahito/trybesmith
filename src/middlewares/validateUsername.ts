import { NextFunction, Request, Response } from 'express';
import User from '../interfaces/users.interface';

const validateUsername = (req: Request, _res: Response, next: NextFunction) => {
  const data: User = req.body;
  const { username } = data;
  if (!username) {
    const err = new Error('"username" is required');
    err.name = 'BadRequest';
    throw err;
  }
  if (typeof username !== 'string') {
    const err = new Error('"username" must be a string');
    err.name = 'UnprocessableEntity';
    throw err;
  }
  if (username.length < 3) {
    const err = new Error('"username" length must be at least 3 characters long');
    err.name = 'UnprocessableEntity';
    throw err;
  }

  next();
};

export default validateUsername;
