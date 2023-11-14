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
  } catch (error) {
    res
      .status(400)
      .send({ message: `не корректные данные запроса. ${error.message}` });
  }
};

module.exports = getCards;
