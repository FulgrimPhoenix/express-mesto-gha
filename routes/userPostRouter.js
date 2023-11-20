import postUser from '../controllers/createUser.js'
import { Router } from 'express';

const usersPostRouter = Router();

usersPostRouter.post('/', postUser);

export default usersPostRouter;