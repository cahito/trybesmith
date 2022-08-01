import { NextFunction, Request, Response } from 'express';
import User from '../interfaces/users.interface';

const validateUserClass = (req: Request, _res: Response, next: NextFunction) => {
  const data: User = req.body;
  const { classe } = data;
  if (!classe) {
    const err = new Error('"classe" is required');
    err.name = 'BadRequest';
    throw err;
  }
  if (typeof classe !== 'string') {
    const err = new Error('"classe" must be a string');
    err.name = 'UnprocessableEntity';
    throw err;
  }
  if (classe.length < 3) {
    const err = new Error('"classe" length must be at least 3 characters long');
    err.name = 'UnprocessableEntity';
    throw err;
  }

  next();
};

export default validateUserClass;
