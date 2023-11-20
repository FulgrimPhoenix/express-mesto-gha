import Card from '../models/card.js';

export const likeCard = (req, res) => {
  try {
    Card.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true }
    )
      .then((card) => {
        if (!card) {
          return res
            .status(404)
            .send({ message: "карточка с данным id не найдена" });
        }
        res.status(200).send(card);
      })
      .catch(() => {
        res.status(400).json({ message: "Неверный запрос" });
      });
  } catch {
    res.status(500).send({ message: `На сервере произошла ошибка` });
  }
};

export const dislikeCard = (req, res) => {
  try {
    Card.findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: req.user._id } },
      { new: true }
    )
      .then((card) => {
        if (!card) {
          return res
            .status(404)
            .send({ message: "карточка с данным id не найдена" });
        }
        res.status(200).send(card);
      })
      .catch(() => {
        res.status(400).json({ message: "Неверный запрос" });
      });
  } catch {
    res.status(500).send({ message: `На сервере произошла ошибка` });
  }
};
