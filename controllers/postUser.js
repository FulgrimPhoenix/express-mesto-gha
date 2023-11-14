const User = require("../models/user");

const createUser = (req, res) => {
  try {
    const newUser = new User(req.body);

    newUser
      .save()
      .then((user) => {
        res.status(201).json(user);
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

module.exports = createUser;
