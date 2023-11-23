import user from "../models/user.js";

export const getMyUserInfo = (req, res) => {
  try {
    user
      .findById(req.user)
      .then((user) => {

        if (!user) {
          return res.status(401).json({ message: "необходима авторизация 3" });
        }
        return res.status(200).json(user);
      })
      .catch((err) => {
        return res.status(400).json(err);
      });
  } catch {
    return res.status(500).json({ message: "На сервере произошла ошибка" });
  }
};
