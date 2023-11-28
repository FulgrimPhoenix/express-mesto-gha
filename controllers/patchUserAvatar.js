import User from "../models/user.js";
import { NotFoundError } from "../errors/errors.js";

const patchUserAvatar = (req, res, next) => {
  User.findByIdAndUpdate(
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

export default patchUserAvatar;
