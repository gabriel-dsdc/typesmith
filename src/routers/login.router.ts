import express from 'express';
import UserController from '../controllers/user.controller';
import userMiddleware from '../middlewares/user.middleware';

const router = express.Router();

const userController = new UserController();
router.post('/', userMiddleware, (req, res) => userController.login(req, res));

export default router;
