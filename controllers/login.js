import { AuthError } from "../errors/errors";
import user from "../models/user";
import jwt from "jsonwebtoken";

export const login = (req, res, next) => {
  const { email, password } = req.body;

  user.findUserByCredentials(email, password)
    .then((user) => {
      return res.status(200).send({
        token: jwt.sign({ _id: user._id }, "some", {
          expiresIn: "7d",
        }),
      });
    })
    .catch(next);
};
