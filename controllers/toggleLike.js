import { NotFoundError } from "../errors/errors.js";
import Card from "../models/card.js";

export const likeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $addToSet: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError("карточка не найдена");
      }
      return res.status(200).send(card);
    })
    .catch(next);
};

export const dislikeCard = (req, res, next) => {
  Card.findByIdAndUpdate(
    req.params.cardId,
    { $pull: { likes: req.user._id } },
    { new: true }
  )
    .then((card) => {
      if (!card) {
        throw new NotFoundError("карточка не найдена");
      }
      return res.status(200).send(card);
    })
    .catch(next);
};
