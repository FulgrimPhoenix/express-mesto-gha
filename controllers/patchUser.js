const User = require("../models/user");

const patchUser = (req, res) => {
  try {
    User.findByIdAndUpdate(req.user._id, {
      name: req.body.name,
      about: req.body.about,
    })
      .then((user) => {
        res.status(200).json(user);
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

module.exports = patchUser;
