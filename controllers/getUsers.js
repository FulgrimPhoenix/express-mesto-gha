const User = require("../models/user");

const getUsers = (req, res) => {
  try {
    User.find({})
      .then((users) => {
        res.status(200).json(users);
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

module.exports = getUsers;
