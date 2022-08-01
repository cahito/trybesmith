import { Router } from 'express';
import validateLogin from '../middlewares/validateLogin';
import AuthController from '../controllers/auth.controller';

const router = Router();
const authController = new AuthController();

router.post('/login', validateLogin, authController.login);

export default router;
