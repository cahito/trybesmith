import { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import StatusByErrorName from '../interfaces/statusByError.interface';

const errors = (err: Error, _req: Request, res: Response, _next: NextFunction) => {
  const name = err.name as keyof StatusByErrorName;
  const message = err.message as string;
  const statusByErrorName = {
    BadRequest: 400,
    Unauthorized: 401,
    NotFound: 404,
    UnprocessableEntity: 422,
  };
  const status = statusByErrorName[name] || 500;

  res.status(status).json({ message });
};

export default errors;
