const getCards = require('../controllers/getCards')
const { Router } = require("express");

const cardsRouter = Router();

cardsRouter.get('/', getCards);

module.exports = cardsRouter;