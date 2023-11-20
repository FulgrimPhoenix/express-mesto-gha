import getUsers from '../controllers/getUsers.js';
import { Router } from 'express';

const usersRouter = Router();

usersRouter.get('/', getUsers);

export default usersRouter;