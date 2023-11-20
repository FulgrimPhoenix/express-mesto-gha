import User from "../models/user.js";
import bcryptjs from "bcryptjs";

const createUser = (req, res) => {
  try {
    bcryptjs.hash(req.body.password, 10).then((hash) => {
      User.findOne({ email: req.body.email }).then((user) => {
        if (!user) {
          const newUser = new User({
            name: req.body.name,
            about: req.body.about,
            avatar: req.body.avatar,
            email: req.body.email,
            password: hash,
          });

          return newUser
            .save()
            .then((user) => {
              res.status(201).json(user);
            })
            .catch((err) =>
              res.status(400).json({ message: "Неверный запрос" })
            );
        }
        return res.status(404).json({ message: "Пользователь уже существует" });
      });
    });
  } catch {
    res.status(500).send({ message: `На сервере произошла ошибка` });
  }
};

export default createUser;
