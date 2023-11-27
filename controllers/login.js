import { AuthError } from "../errors/errors";
import User from "../models/user";
import jwt from "jsonwebtoken";

export const login = (req, res, next) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      if (!user){
        throw new AuthError('неверный логин или пароль');
      }
      return res.status(200).send({
        message: jwt.sign({ _id: user._id }, "some", {
          expiresIn: "7d",
        }),
      });
    })
    .catch(next);
};
