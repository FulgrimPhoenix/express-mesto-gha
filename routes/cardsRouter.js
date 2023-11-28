import postCard from "../controllers/postCard.js";
import { deleteCard } from "../controllers/deleteCard.js";
import getCards from '../controllers/getCards.js';
import { likeCard, dislikeCard } from "../controllers/toggleLike.js";
import { Router } from "express";
import { celebrate, Joi } from "celebrate";

export const cardsPostRouter = Router();
export const cardsDeleteCardRouter = Router();
export const cardsRouter = Router();
export const cardsPutLikeRouter = Router();
export const cardsDeleteLikeRouter = Router();

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

cardsDeleteCardRouter.delete(
  "/:cardId",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().required().length(24).pattern(/\w+$/),
    }),
  }),
  deleteCard
);

cardsRouter.get('/', getCards);

cardsPutLikeRouter.put(
  "/:cardId/likes",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().required().length(24).pattern(/\w+$/),
    }),
  }),
  likeCard
);


cardsDeleteLikeRouter.delete(
  "/:cardId/likes",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().required().length(24).pattern(/\w+$/),
    }),
  }),
  dislikeCard
);