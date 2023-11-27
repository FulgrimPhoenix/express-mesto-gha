import { dislikeCard } from "../controllers/toggleLike.js";
import { Router } from "express";
import { celebrate, Joi } from "celebrate";

const cardsDeleteLikeRouter = Router();

cardsDeleteLikeRouter.delete(
  "/:cardId/likes",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().required().length(24).pattern(/\w+$/),
    }),
  }),
  dislikeCard
);

export default cardsDeleteLikeRouter;
