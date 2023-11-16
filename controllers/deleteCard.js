const Card = require("../models/card");

module.exports.deleteCard = (req, res) => {
  try {
    Card.findByIdAndDelete(req.params.cardId)
      .then((card) => {
        if (!card) {
          return res.status(404).send({ message: "карточка с данным id не найдена" });
        }
        res.status(200).json(card);
      })
      .catch(() => res.status(400).json({ message: "Неверный запрос" }));
  } catch (error) {
    return res.status(500).send({
      message: 'Ошибка на стороне сервера',
    });
  }
};
