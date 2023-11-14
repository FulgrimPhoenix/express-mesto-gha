const User = require("../models/user");

const getUserById = (req, res) => {
  try {
    User.findById(req.params.id).then((user) => {
      res.status(200).json(user);
    })
    .catch(() => res.status(500).send({message: 'Ошибка на стороне сервера'}))
  } catch (error) {
    if (err.name === "ValidationError") {
      res.status(400).send({ message: err.message });
    }
    res.status(500)({message: 'Ошибка на стороне сервера'})
  }
};

module.exports = getUserById;