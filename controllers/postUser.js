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
        console.log("Something goes wrong:", res.status(500).json(err))
      );
  } catch (error) {
    res
      .status(400)
      .send({ message: `не корректные данные запроса. ${error.message}` });
  }
};

module.exports = createUser;
