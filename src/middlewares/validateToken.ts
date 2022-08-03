import jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

const JWT_SECRET = 'Estenaoehumsegredo';

const validateToken = (req: Request, _res: Response, next: NextFunction) => {
  const token = req.headers.authorization;
  if (!token) {
    const err = new Error('Token not found');
    err.name = 'Unauthorized';
    throw err;
  }

  try {
    jwt.verify(token, JWT_SECRET);
  } catch {
    const err = new Error('Invalid token');
    err.name = 'Unauthorized';
    throw err;
  }

  next();
};

export default validateToken;
