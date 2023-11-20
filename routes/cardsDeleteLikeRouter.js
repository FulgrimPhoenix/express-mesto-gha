import { dislikeCard } from '../controllers/toggleLike.js';
import { Router } from 'express';

const cardsDeleteLikeRouter = Router();

cardsDeleteLikeRouter.delete('/:cardId/likes',  dislikeCard);

export default cardsDeleteLikeRouter;