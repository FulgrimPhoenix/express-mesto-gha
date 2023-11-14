const Card = require("../models/card");

module.exports.deleteCard = (req, res) => {
  try {
    Card.findByIdAndDelete(req.params.cardId)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) =>
        res.status(404).json({ message: "Неверный запрос" })
      );
  } catch (error) {
    return res.status(400).send({
      message: `Не верный запрос. Не удалось найти карточку с таким id. ${error.message}`,
    });
  }
};
