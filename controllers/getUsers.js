const User = require("../models/user");

const getUsers = (req, res) => {
  try {
    User.find({})
      .then((users) => {
        res.status(200).json(users);
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

module.exports = getUsers;
