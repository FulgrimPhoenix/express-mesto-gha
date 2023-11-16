const User = require("../models/user");

const getUserById = (req, res) => {
  try {
    User.findById(req.params.id).then((user) => {
      if (!user) {
        return res
          .status(404)
          .send({ message: "пользователь с данным id не найден" });
      }
      res.status(200).json(user);
    })
    .catch(() => res.status(400).send({message: 'Некорректный id'}))
  } catch (error) {
    if (err.name === "ValidationError") {
      res.status(400).send({ message: err.message });
    }
    res.status(500)({message: 'Ошибка на стороне сервера'})
  }
};

module.exports = getUserById;