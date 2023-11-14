const Card = require("../models/card");

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
        res.status(500).json({ message: "На сервере произошла ошибка" })
      );
  } catch (error) {
    return res
      .status(404)
      .send({
        message: `Не верный запрос. Не удалось создать карточку. ${error.message}`,
      });
  }
};

module.exports = postCard;
