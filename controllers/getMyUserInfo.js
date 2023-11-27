import { AuthError, BadRequest } from "../errors/errors.js";
import user from "../models/user.js";

export const getMyUserInfo = (req, res, next) => {
  try {
    user
      .findById(req.user)
      .then((user) => {
        if (!user) {
          throw new BadRequest("неверный запрос");
        }
        return res.status(200).json(user);
      })
      .catch(next);
  } catch {
    next();
  }
};
