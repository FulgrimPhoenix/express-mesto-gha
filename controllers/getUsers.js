import User from '../models/user.js';

const getUsers = (req, res) => {
  try {
    User.find({})
      .then((users) => {
        res.status(200).json(users);
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

export default getUsers;
