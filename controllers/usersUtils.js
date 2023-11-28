import { BadRequest, userAlreadyExists, NotFoundError } from "../errors/errors.js";
import user from "../models/user.js";
import bcryptjs from "bcryptjs";

// как вы и сказали - бд делает проверку наличия пользователя, но если он существует то пробрасывает ошибку 500, а в тестах требует 409ую.

export const createUser = (req, res, next) => {
  user
    .findOne({ email: req.body.email })
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

export const getMyUserInfo = (req, res, next) => {
  user
    .findById(req.user)
    .then((user) => {
      if (!user) {
        throw new BadRequest("неверный запрос");
      }
      return res.status(200).json(user);
    })
    .catch(next);
};

export const getUserById = (req, res, next) => {
  user.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError("ползователь не найден");
      }
      return res.status(200).json(user);
    })
    .catch(next);
};

export const getUsers = (req, res, next) => {
  user.find({})
    .then((users) => {
      return res.status(200).json(users);
    })
    .catch(next);
};

export const patchUser = (req, res, next) => {
  console.log(req.user);
  user.findByIdAndUpdate(req.user._id, {
    name: req.body.name,
    about: req.body.about,
  }, {
    new: true,
    runValidators: true
  })
    .then((user) => {
      if (!user) {
        throw new BadRequest("неверный запрос");
      }
      return res.status(200).json(user);
    })
    .catch(next);
};

export const patchUserAvatar = (req, res, next) => {
  user.findByIdAndUpdate(
    req.user._id,
    { avatar: req.body.avatar },
    {
      new: true,
      runValidators: true,
    }
  )
    .then((user) => {
      if (!user) {
        throw new NotFoundError("страница не найдена");
      }
      res.status(200).json(user);
    })
    .catch(next);
};