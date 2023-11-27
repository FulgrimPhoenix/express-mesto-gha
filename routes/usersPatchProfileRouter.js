import patchUser from "../controllers/patchUser.js";
import { Router } from "express";
import { celebrate, Joi } from "celebrate";

const usersPatchProfileRouter = Router();

usersPatchProfileRouter.patch(
  "/me",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().min(2).max(30),
      about: Joi.string().min(2).max(30),
    }),
  }),
  patchUser
);

export default usersPatchProfileRouter;
