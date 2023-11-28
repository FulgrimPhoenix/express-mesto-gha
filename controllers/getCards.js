import { BadRequest } from "../errors/errors.js";
import card from "../models/card.js";

const getCards = (req, res, next) => {
  return card.find({})
    .then((cards) => {
      if (cards) {
        return res.status(200).json(cards);
      }
      throw new BadRequest("неверный запрос");
    })
    .catch(next);
};

export default getCards;
