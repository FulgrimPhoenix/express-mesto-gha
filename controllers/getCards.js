import Card from '../models/card.js';

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

export default getCards;
