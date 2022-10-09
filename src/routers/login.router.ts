import express from 'express';
import UserController from '../controllers/user.controller';
import { loginMiddleware } from '../middlewares/user.middleware';

const router = express.Router();

const userController = new UserController();
router.post('/', loginMiddleware, (req, res) => userController.login(req, res));

export default router;
