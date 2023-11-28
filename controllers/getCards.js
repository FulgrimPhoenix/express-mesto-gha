import { BadRequest } from "../errors/errors.js";
import Card from "../models/card.js";

const getCards = (req, res, next) => {
  return Card.find({})
    .then((cards) => {
      if (cards) {
        return res.status(200).json(cards);
      }
      throw new BadRequest("неверный запрос");
    })
    .catch(next);
};

export default getCards;
