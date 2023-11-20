import patchUser from '../controllers/patchUser.js';
import { Router } from 'express';

const usersPatchProfileRouter = Router();

usersPatchProfileRouter.patch('/me', patchUser);

export default usersPatchProfileRouter;