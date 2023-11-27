import { AuthError, BadRequest, NotFoundError, userAlreadyExists } from "../errors/errors.js";
import User from "../models/user.js";
import bcryptjs from "bcryptjs";

const createUser = (req, res, next) => {
  try {
    bcryptjs.hash(req.body.password, 10).then((hash) => {
      User.findOne({ email: req.body.email })
        .then((user) => {
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
              .catch(() => {
                throw new BadRequest("Данные введены неверно");
              })
              .then((user) => {
                res
                  .status(201)
                  .json({data : {
                    _id: user._id,
                    email: user.email,
                  }});
              })
              .catch(next);
          }
          throw new userAlreadyExists("Пользователь уже существует");
        })
        .catch(next);
    });
  } catch {
    next();
  }
};

export default createUser;
