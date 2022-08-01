import { Router } from 'express';
import validateProductName from '../middlewares/validateProductName';
import validateProductAmount from '../middlewares/validateProductAmount';
import ProductsController from '../controllers/products.controller';

const router = Router();
const productsController = new ProductsController();

router.post('/products', validateProductName, validateProductAmount, productsController.create);
router.get('/products', productsController.list);

export default router;
