const Card = require("../models/card");

const getCards = (req, res) => {
  try {
    Card.find({})
      .then((cards) => {
        res.status(200).json(cards);
      })
      .catch((err) =>
        res.status(400).json({ message: "Неверный запрос" })
      );
  } catch {
    res
      .status(500)
      .send({ message: `На сервере произошла ошибка` });
  }
};

module.exports = getCards;
