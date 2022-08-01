import { NextFunction, Request, Response } from 'express';
import User from '../interfaces/users.interface';

const validateUserLevel = (req: Request, _res: Response, next: NextFunction) => {
  const data: User = req.body;
  const { level } = data;
  if (!level && level !== 0) {
    const err = new Error('"level" is required');
    err.name = 'BadRequest';
    throw err;
  }
  if (typeof level !== 'number') {
    const err = new Error('"level" must be a number');
    err.name = 'UnprocessableEntity';
    throw err;
  }
  if (level < 1) {
    const err = new Error('"level" must be greater than or equal to 1');
    err.name = 'UnprocessableEntity';
    throw err;
  }

  next();
};

export default validateUserLevel;
