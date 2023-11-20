import User from "../models/user";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { email, password } = req.body;

  User.findOne({ email })
    .then((user) => {
      if (!user) {
        return Promise.reject(new Error("Неправильные почта или пароль"));
      }
      return bcryptjs.compare(password, user.password);
    })
    .then((matched) => {
      if (!matched) {
        return Promise.reject(new Error("Неправильные почта или пароль"));
      }
      return res
        .status(200)
        .send({ message: jwt.sign({ _id: req.user._id }, "some-shit") });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};
