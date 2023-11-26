import { NotFoundError } from '../errors/errors.js';
import Card from '../models/card.js';

export const deleteCard = (req, res, next) => {
  try {
    Card.findByIdAndDelete(req.params.cardId)
      .then((card) => {
        if (!card) {
           throw new NotFoundError("карточка с данным id не найдена");
        }
        res.status(200).json(card);
      })
      .catch(next);
  } catch (error) {
    return res.status(500).send({
      message: 'На сервере произошла ошибка',
    });
  }
};
