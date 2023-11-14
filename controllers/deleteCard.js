const Card = require("../models/card");

module.exports.deleteCard = (req, res) => {
  try {
    Card.findByIdAndDelete(req.params.cardId)
      .then((result) => {
        res.status(200).json(result);
      })
      .catch((err) =>
        console.log("Something goes wrong:", res.status(500).json(err.message))
      );
  } catch (error) {
    return res.status(404).send({
      message: `Не верный запрос. Не удалось найти карточку с таким id. ${error.message}`,
    });
  }
};
