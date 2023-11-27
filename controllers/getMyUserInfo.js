import { AuthError, BadRequest } from "../errors/errors.js";
import user from "../models/user.js";

export const getMyUserInfo = (req, res) => {
  try {
    user
      .findById(req.user)
      .then((user) => {
        if (!user) {
          throw new AuthError('необходима авторизация');
        }
        return res.status(200).json(user);
      })
      .then(() => {throw new BadRequest('неверный запрос')})
      .catch((err) => {
        return res.status(400).json(err);
      });
  } catch {
    return res.status(500).json({ message: "На сервере произошла ошибка" });
  }
};
