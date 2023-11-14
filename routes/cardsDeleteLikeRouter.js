const { dislikeCard } = require('../controllers/toggleLike')
const { Router } = require("express");

const cardsDeleteLikeRouter = Router();

cardsDeleteLikeRouter.delete('/:cardId/likes',  dislikeCard);

module.exports = cardsDeleteLikeRouter;