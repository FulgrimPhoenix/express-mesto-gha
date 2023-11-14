const { likeCard } = require('../controllers/toggleLike')
const { Router } = require("express");

const cardsPutLikeRouter = Router();

cardsPutLikeRouter.put('/:cardId/likes',  likeCard);

module.exports = cardsPutLikeRouter;