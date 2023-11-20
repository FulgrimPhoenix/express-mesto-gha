import User from '../models/user.js';

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
  } catch {
    res
      .status(500)
      .send({ message: `На сервере произошла ошибка` });
  }
};

export default createUser;
