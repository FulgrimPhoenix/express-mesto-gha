const Card = require("../models/card");

module.exports.likeCard = (req, res) => {
  try {
    Card.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true }
    ).then((result) => res.status(300).send(result));
    res.status(500).json({ message: "На сервере произошла ошибка" });
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
    ).then((result) => res.status(200).send(result));
    res.status(500).json({ message: "На сервере произошла ошибка" });
  } catch (error) {
    res.status(404).send({ message: `карточка не найдена. ${error.message}` });
  }
};
