import patchUserAvatar from "../controllers/patchUserAvatar.js";
import { Router } from "express";
import { celebrate, Joi } from "celebrate";

const usersPatchAvatarRouter = Router();

usersPatchAvatarRouter.patch(
  "/me/avatar",
  celebrate({
    body: Joi.object().keys({
      avatar: Joi.string().pattern(/^https?:\/\//)
    }).unknown(true),
  }),
  patchUserAvatar
);

export default usersPatchAvatarRouter;
