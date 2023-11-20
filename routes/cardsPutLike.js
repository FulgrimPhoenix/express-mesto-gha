import { likeCard } from '../controllers/toggleLike.js';
import { Router } from 'express';

const cardsPutLikeRouter = Router();

cardsPutLikeRouter.put('/:cardId/likes',  likeCard);

export default cardsPutLikeRouter;