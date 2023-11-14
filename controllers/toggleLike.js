const Card = require("../models/card");

module.exports.likeCard = (req, res) => {
  try {
    Card.findByIdAndUpdate(
      req.params.cardId,
      { $addToSet: { likes: req.user._id } },
      { new: true }
    )
      .then((result) => res.status(300).send(result))
      .catch((err) =>
        res
          .status(500)
          .send({ message: `что-то не так на стороне сервера: ${err.message}` })
      );
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
      .catch((err) =>
        res
          .status(500)
          .send({ message: `что-то не так на стороне сервера: ${err.message}` })
      );
  } catch (error) {
    res.status(404).send({ message: `карточка не найдена. ${error.message}` });
  }
};
