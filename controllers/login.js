import User from "../models/user";
import jwt from "jsonwebtoken";

export const login = (req, res) => {
  const { email, password } = req.body;

  User.findUserByCredentials(email, password)
    .then((user) => {
      res.status(200).send({
        message: jwt.sign({ _id: user._id }, "some", {
          expiresIn: "7d",
        }),
      });
    })
    .catch((err) => {
      res.status(401).send({ message: err.message });
    });
};
