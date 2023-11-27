import { deleteCard } from "../controllers/deleteCard.js";
import { Router } from "express";
import { celebrate, Joi } from "celebrate";

const cardsDeleteCardRouter = Router();

cardsDeleteCardRouter.delete(
  "/:cardId",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().required().length(24).pattern(/\w+$/),
    }),
  }),
  deleteCard
);

export default cardsDeleteCardRouter;
