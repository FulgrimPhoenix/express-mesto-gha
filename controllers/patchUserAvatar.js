const User = require("../models/user");

const patchUserAvatar = (req, res) => {
  try {
    User.findByIdAndUpdate(
      req.user._id,
      { avatar: req.body.avatar },
      {
        new: true,
        runValidators: true
      }
    )
      .then((user) => {
        res.status(200).json(user);
      })
      .catch((err) =>
        res.status(400).json({ message: "Неверный запрос" })
      );
  } catch {
    res
      .status(500)
      .send({ message: `На сервере произошла ошибка` });
  }
};

module.exports = patchUserAvatar;
