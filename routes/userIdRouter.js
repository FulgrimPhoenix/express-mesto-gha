import getUserById from "../controllers/getUserById.js";
import { Router } from "express";
import { celebrate, Joi } from "celebrate";

const usersIdRouter = Router();

usersIdRouter.get(
  "/:id",
  celebrate({
    params: Joi.object().keys({
      id: Joi.string().required().length(24).pattern(/\w+$/),
    }),
  }),
  getUserById
);

export default usersIdRouter;
