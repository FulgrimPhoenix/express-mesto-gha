import getCards from '../controllers/getCards.js';
import { Router } from 'express';

const cardsRouter = Router();

cardsRouter.get('/', getCards);

export default cardsRouter;