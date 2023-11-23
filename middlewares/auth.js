import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  const { authorization } = req.headers;

  if (!authorization || !authorization.startsWith('Bearer ')) {
    return res.status(401).json({ message: "необходима авторизация 1" });
  }

  const token = authorization.replace("Bearer ", "");

  let payload;

  try {
    payload = jwt.verify(token, "some");
  } catch {
    res.status(401).json({ message: "необходима авторизация 2" });
  }

  req.user = payload;

  next();
};
