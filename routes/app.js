import { Router } from "express";
import usersRouter from "./usersRouter.js";
import usersIdRouter from "./userIdRouter.js";
import usersPatchProfileRouter from "./usersPatchProfileRouter.js";
import usersPatchAvatarRouter from "./usersPatchAvatarRouter.js";
import cardsRouter from "./cardsRouter.js";
import cardsPostRouter from "./cardsPostRouter.js";
import cardsPutLikeRouter from "./cardsPutLike.js";
import cardsDeleteLikeRouter from "./cardsDeleteLikeRouter.js";
import cardsDeleteCardRouter from "./cardsDeleteCardRouter.js";
import errorPath from "./errors.js";
import { login } from "../controllers/login.js";
import createUser from "../controllers/createUser.js";
import { usersMeRouter } from "./usersMeRouter.js";
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
      avatar: Joi.string(),
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
router.use(
  "/cards",
  auth,
  celebrate({
    body: Joi.object().keys({
      title: Joi.string().required(),
      link: Joi.string().required(),
    }),
  }),
  cardsPostRouter
);
router.use("/cards", auth, cardsDeleteLikeRouter);
router.use("/cards", auth, cardsPutLikeRouter);
router.use("/cards", auth, cardsDeleteCardRouter);
router.use("/", errorPath);

export default router;
