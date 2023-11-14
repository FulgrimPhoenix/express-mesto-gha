const postCard = require('../controllers/postCard')
const { Router } = require("express");

const cardsPostRouter = Router();

cardsPostRouter.post('/', postCard);

module.exports = cardsPostRouter;