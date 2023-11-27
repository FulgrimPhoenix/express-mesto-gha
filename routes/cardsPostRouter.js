import postCard from "../controllers/postCard.js";
import { Router } from "express";
import { celebrate, Joi } from "celebrate";

const cardsPostRouter = Router();

cardsPostRouter.post(
  "/",
  celebrate({
    body: Joi.object().keys({
      name: Joi.string().required().min(2).max(30),
      link: Joi.string().required().pattern(/^https?:\/\//),
    }),
  }),
  postCard
);

export default cardsPostRouter;
