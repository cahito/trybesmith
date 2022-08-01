import { Router } from 'express';
import validateUsername from '../middlewares/validateUsername';
import validateUserClass from '../middlewares/validateUserClass';
import validateUserLevel from '../middlewares/validateUserLevel';
import validateUserPassword from '../middlewares/validateUserPassword';
import UsersController from '../controllers/users.controller';

const router = Router();
const usersController = new UsersController();

router.post(
  '/users',
  validateUsername,
  validateUserClass,
  validateUserLevel,
  validateUserPassword,
  usersController.create,
);

export default router;
