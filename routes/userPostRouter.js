import postUser from '../controllers/postUser.js'
import { Router } from 'express';

const usersPostRouter = Router();

usersPostRouter.post('/', postUser);

export default usersPostRouter;