const User = require("../models/user");

const patchUserAvatar = (req, res) => {
  try {
    User.findByIdAndUpdate(req.user._id, { avatar: req.body.avatar })
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) =>
        res.status(400).json({ message: "На сервере произошла ошибка" })
      );
  } catch (error) {
    res
      .status(400)
      .send({ message: `не корректные данные запроса. ${error.message}` });
  }
};

module.exports = patchUserAvatar;
