import { Router } from 'express';
import validateToken from '../middlewares/validateToken';
import validateProductsIds from '../middlewares/validateProductsIds';
import OrdersController from '../controllers/orders.controller';

const router = Router();
const ordersController = new OrdersController();

router.get('/orders', ordersController.list);
router.post('/orders', validateToken, validateProductsIds, ordersController.create);

export default router;
