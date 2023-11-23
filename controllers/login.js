import User from "../models/user";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { email, password } = req.body;

  console.log(email, 4444);
  User.findOne({ email })
    .then((user) => {
      console.log(user);
      if (!user) {
        return Promise.reject(new Error("Неправильные почта или пароль"));
      }
      return bcryptjs.compare(password, user.password);
    })
    .then((matched) => {
      if (!matched) {
        return Promise.reject(new Error("Неправильные почта или пароль"));
      }
      console.log(user, 2222222222);
      return res
        .status(200)
        .send({ message: jwt.sign({ _id: matched._id }, "some", { expiresIn: '7d' }) });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};
