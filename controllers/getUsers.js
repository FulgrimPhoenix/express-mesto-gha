import { BadRequest } from "../errors/errors.js";
import user from "../models/user.js";

const getUsers = (req, res, next) => {
  user.find({})
    .then((users) => {
      return res.status(200).json(users);
    })
    .catch(next);
};

export default getUsers;
