const Card = require("../models/card");

const getCards = (req, res) => {
  try {
    Card.find({})
      .then((cards) => {
        res.status(200).json(cards);
      })
      .catch((err) =>
        res.status(500).json({ message: "На сервере произошла ошибка" })
      );
  } catch (error) {
    res
      .status(400)
      .send({ message: `не корректные данные запроса. ${error.message}` });
  }
};

module.exports = getCards;
