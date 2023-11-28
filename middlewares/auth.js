import jwt from "jsonwebtoken";
import { AuthError } from "../errors/errors";

export const auth = (req, res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization || !authorization.startsWith("Bearer ")) {
      throw new AuthError("Необходима авторизация");
    }
    const token = authorization.replace("Bearer ", "");

    let payload;

    payload = jwt.verify(token, "some");
    req.user = payload;
    next();
  } catch (err) {
    next(err);
  }
};
