import postUser from '../controllers/patchUser.js'
import { Router } from 'express';

const usersPostRouter = Router();

usersPostRouter.post('/', postUser);

export default usersPostRouter;