import { Router } from "express";
import {usersRouter, usersMeRouter, usersIdRouter, usersPatchAvatarRouter, usersPatchProfileRouter} from "./usersRouter.js";
import { cardsPostRouter, cardsDeleteCardRouter, cardsRouter, cardsPutLikeRouter, cardsDeleteLikeRouter } from "./cardsRouter.js";
import errorPath from "./errors.js";
import { login } from "../controllers/login.js";
import createUser from "../controllers/createUser.js";
import { auth } from "../middlewares/auth.js";
import { celebrate, Joi } from "celebrate";

const router = Router();

router.post(
  "/signin",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
    }),
  }),
  login
);
router.post(
  "/signup",
  celebrate({
    body: Joi.object().keys({
      email: Joi.string().required().email(),
      password: Joi.string().required().min(8),
      name: Joi.string().min(2).max(30),
      avatar: Joi.string().pattern(/^https?:\/\//),
      about: Joi.string().min(2).max(30),
    }),
  }),
  createUser
);

router.use("/users", auth, usersRouter);
router.use("/users", auth, usersMeRouter);
router.use("/users", auth, usersIdRouter);
router.use("/users", auth, usersPatchProfileRouter);
router.use("/users", auth, usersPatchAvatarRouter);

router.use("/cards", auth, cardsRouter);
router.use("/cards", auth, cardsPostRouter);
router.use("/cards", auth, cardsDeleteLikeRouter);
router.use("/cards", auth, cardsPutLikeRouter);
router.use("/cards", auth, cardsDeleteCardRouter);
router.use("/", errorPath);

export default router;
