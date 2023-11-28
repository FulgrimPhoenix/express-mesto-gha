import card from "../models/card.js";
import { BadRequest } from "../errors/errors.js";

const postCard = (req, res, next) => {
  req.body.owner = { _id: req.user._id };
  const newCard = new card(req.body);
  newCard
    .save()
    .then((result) => {
      return res.status(201).json({ _id: result._id });
    })
    .catch(next);
};

export default postCard;
