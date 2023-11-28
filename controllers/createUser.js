import {
  AuthError,
  BadRequest,
  NotFoundError,
  userAlreadyExists,
} from "../errors/errors.js";
import user from "../models/user.js";
import bcryptjs from "bcryptjs";

//как вы и сказали - бд делает проверку наличия пользователя, но если он существует то пробрасывает ошибку 500, а в тестах требует 409ую.

const createUser = (req, res, next) => {
  user.findOne({ email: req.body.email })
    .then((user) => {
      if (user) {
        throw new userAlreadyExists("пользователь уже существет");
      }
    })
    .catch(next);
  bcryptjs.hash(req.body.password, 10).then((hash) => {
    const newUser = new user({
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
