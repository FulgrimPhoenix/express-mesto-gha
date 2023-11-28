import { NotFoundError } from "../errors/errors.js";
import user from "../models/user.js";

const getUserById = (req, res, next) => {
  user.findById(req.params.id)
    .then((user) => {
      if (!user) {
        throw new NotFoundError("ползователь не найден");
      }
      return res.status(200).json(user);
    })
    .catch(next);
};

export default getUserById;
