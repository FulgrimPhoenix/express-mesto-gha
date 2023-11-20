import getUserById from '../controllers/getUserById.js'
import { Router } from 'express';

const usersIdRouter = Router();

usersIdRouter.get('/:id', getUserById);

export default usersIdRouter;