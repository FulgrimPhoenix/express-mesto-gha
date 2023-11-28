import {
  AuthError,
  BadRequest,
  NotFoundError,
  userAlreadyExists,
} from "../errors/errors.js";
import User from "../models/user.js";
import bcryptjs from "bcryptjs";

const createUser = (req, res, next) => {
  bcryptjs.hash(req.body.password, 10).then((hash) => {
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
        if (user) {
          res.status(201).json({
            _id: user._id,
            email: user.email,
          });
        }
        throw new BadRequest("Данные введены неверно");
      })
      .catch(next);
  });
};

export default createUser;
