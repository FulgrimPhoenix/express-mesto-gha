import { AuthError, BadRequest, NotFoundError } from "../errors/errors.js";
import User from "../models/user.js";
import bcryptjs from "bcryptjs";

const createUser = (req, res, next) => {
  try {
    if(req.body.email){
      bcryptjs.hash(req.body.password, 10).then((hash) => {
        User.findOne({ email: req.body.email })
          .then((user) => {
            if (!user) {
              console.log(321);
              const newUser = new User({
                name: req.body.name,
                about: req.body.about,
                avatar: req.body.avatar,
                email: req.body.email,
                password: hash,
              });
              console.log(newUser);
              return newUser
                .save()
                .then((user) => {
                  console.log(456);
                  res.status(201).json(user);
                  if (!user) {
                    throw new BadRequest("Неверый запрос");
                  }
                })
                .catch(next);
            }
            throw new AuthError("Пользователь уже существует");
          })
          .catch(next);
      })}else{
        throw new BadRequest("дьявольщина");
      }
  } catch {
    next()
  }
};

export default createUser;
