import express, { NextFunction, Request, Response } from 'express';
import 'express-async-errors';
import ProductsRoutes from './routes/products.routes';
import UsersRoutes from './routes/users.routes';
import OrdersRoutes from './routes/orders.routes';
import AuthRoutes from './routes/auth.routes';

const app = express();

app.use(express.json());

app.use(ProductsRoutes);
app.use(UsersRoutes);
app.use(OrdersRoutes);
app.use(AuthRoutes);

app.use((err: Error, _req: Request, res: Response, next: NextFunction) => {
  const { name, message } = err;
  // console.log(`name: ${name}`);
  switch (name) {
    case 'BadRequest':
      return res.status(400).json({ message });
    case 'Unauthorized':
      return res.status(401).json({ message });
    case 'NotFoundError':
      return res.status(404).json({ message });
    case 'UnprocessableEntity':
      return res.status(422).json({ message });
    default:
      console.error(err);
      res.sendStatus(500);
  }
  next();
});

export default app;
