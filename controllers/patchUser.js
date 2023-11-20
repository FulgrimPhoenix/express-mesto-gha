import User from '../models/user.js';

const patchUser = (req, res) => {
  try {
    User.findByIdAndUpdate(req.user._id, {
      name: req.body.name,
      about: req.body.about,
    }, {
      new: true,
      runValidators: true
    })
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

export default patchUser;
