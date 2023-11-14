const User = require("../models/user");

const getUserById = (req, res) => {
  try {
    User.findById(req.params.id)
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) =>
        res.status(404).json({ message: "Неверный запрос" })
      );
  } catch (error) {
    res
      .status(400)
      .send({ message: `не корректные данные запроса. ${error.message}` });
  }
};

module.exports = getUserById;
