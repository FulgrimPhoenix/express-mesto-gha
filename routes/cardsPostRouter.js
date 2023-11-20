import postCard from '../controllers/postCard.js';
import { Router } from 'express';

const cardsPostRouter = Router();

cardsPostRouter.post('/', postCard);

export default cardsPostRouter;