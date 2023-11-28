import { NotFoundError, accessError } from "../errors/errors.js";
import card from "../models/card.js";

export const deleteCard = (req, res, next) => {
  card.findById(req.params.cardId)
    .then((card) => {
      if (!card) {
        throw new NotFoundError("карточка с данным id не найдена");
      }
      if (card.owner.toString() === req.user._id) {
        return card.findByIdAndDelete(req.params.cardId)
          .then((card) => {
            return res.status(200).json(card);
          })
          .catch(next);
      }
      throw new accessError("доступ отсутствует");
    })
    .catch(next);
};
