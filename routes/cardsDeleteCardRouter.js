const { deleteCard } = require('../controllers/deleteCard')
const { Router } = require("express");

const cardsDeleteCardRouter = Router();

cardsDeleteCardRouter.delete('/:cardId',  deleteCard);

module.exports = cardsDeleteCardRouter;