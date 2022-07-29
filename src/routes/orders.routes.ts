import { Router } from 'express';
import OrdersController from '../controllers/products.controller';

const router = Router();
const ordersController = new OrdersController();

router.get('/orders', ordersController.list);

export default router;
