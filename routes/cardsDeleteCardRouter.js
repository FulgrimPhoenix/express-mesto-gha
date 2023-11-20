import { deleteCard } from '../controllers/deleteCard.js';
import { Router } from 'express';

const cardsDeleteCardRouter = Router();

cardsDeleteCardRouter.delete('/:cardId',  deleteCard);

export default cardsDeleteCardRouter;