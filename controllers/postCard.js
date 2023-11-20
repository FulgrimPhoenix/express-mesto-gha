import Card from '../models/card.js';

const postCard = (req, res) => {
  try {
    req.body.owner = { _id: req.user._id };
    const newCard = new Card(req.body);
    newCard
      .save()
      .then((result) => {
        res.status(201).json(result);
      })
      .catch((err) =>
        res.status(400).json({ message: "Неверный запрос" })
      );
  } catch {
    return res
      .status(500)
      .send({
        message: `На сервере произошла ошибка`,
      });
  }
};

export default postCard;
