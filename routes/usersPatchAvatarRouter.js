import patchUserAvatar from '../controllers/patchUserAvatar.js';
import { Router } from 'express';


const usersPatchAvatarRouter = Router();

usersPatchAvatarRouter.patch('/me/avatar', patchUserAvatar);

export default usersPatchAvatarRouter;