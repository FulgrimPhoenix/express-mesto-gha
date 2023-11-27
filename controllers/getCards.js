import { BadRequest } from "../errors/errors.js";
import Card from "../models/card.js";

const getCards = (req, res, next) => {
  try {
    Card.find({})
      .then(() => {
        throw new BadRequest("Неверный запрос");
      })
      .then((cards) => {
        return res.status(200).json(cards);
      })
      .catch(next);
  } catch {
    next();
  }
};

export default getCards;
