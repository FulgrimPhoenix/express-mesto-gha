import { BadRequest } from "../errors/errors.js";
import User from "../models/user.js";

const getUsers = (req, res, next) => {
  User.find({})
    .then((users) => {
      if (!users) {
        throw new BadRequest("неверный запрос");
      }
      return res.status(200).json(users);
    })
    .catch(next);
};

export default getUsers;
