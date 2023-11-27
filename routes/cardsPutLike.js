import { likeCard } from "../controllers/toggleLike.js";
import { Router } from "express";
import { celebrate, Joi } from "celebrate";

const cardsPutLikeRouter = Router();

cardsPutLikeRouter.put(
  "/:cardId/likes",
  celebrate({
    params: Joi.object().keys({
      cardId: Joi.string().required().length(24).pattern(/\w+$/),
    }),
  }),
  likeCard
);

export default cardsPutLikeRouter;
