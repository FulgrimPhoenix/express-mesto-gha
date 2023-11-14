const Card = require("../models/card");

module.exports.likeCard = (req, res) => {
  try {
    Card.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true }
    )
      .then((result) => res.status(200).send(result))
      .catch(() => {
        res.status(400).json({ message: "Неверный запрос" });
      });
  } catch {
    res.status(404).send({ message: "карточка не найдена" });
  }
};

module.exports.dislikeCard = (req, res) => {
  try {
    Card.findByIdAndUpdate(
      req.params.cardId,
      { $pull: { likes: req.user._id } },
      { new: true }
    )
      .then((result) => res.status(200).send(result))
      .catch(() => {
        res.status(400).json({ message: "Неверный запрос" });
      });
  } catch (error) {
    res.status(404).send({ message: `карточка не найдена. ${error.message}` });
  }
};
