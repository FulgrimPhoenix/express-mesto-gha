import getUsers from '../controllers/getUsers.js';
import getUserById from "../controllers/getUserById.js";
import { getMyUserInfo } from "../controllers/getMyUserInfo";
import patchUserAvatar from "../controllers/patchUserAvatar.js";
import patchUser from "../controllers/patchUser.js";
import { celebrate, Joi } from "celebrate";
import { Router } from 'express';

export const usersRouter = Router();
export const usersIdRouter = Router();
export const usersMeRouter = Router();
export const usersPatchAvatarRouter = Router();
export const usersPatchProfileRouter = Router();

usersRouter.get('/', getUsers);

usersIdRouter.get(
  "/:id",
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().required().length(24).pattern(/\w+$/),
    }),
  }),
  getUserById
);

usersMeRouter.get("/me", getMyUserInfo);

usersPatchAvatarRouter.patch(
  "/me/avatar",
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().required().pattern(/^https?:\/\//)
    }).unknown(true),
  }),
  patchUserAvatar
);

usersPatchProfileRouter.patch(
  "/me",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      about: Joi.string().required().min(2).max(30),
    }),
  }),
  patchUser
);