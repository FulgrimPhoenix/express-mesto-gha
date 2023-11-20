import { Router } from 'express';
import usersRouter from './usersRouter.js';
import usersIdRouter from './userIdRouter.js';
import usersPostRouter from './userPostRouter.js';
import usersPatchProfileRouter from './usersPatchProfileRouter.js';
import usersPatchAvatarRouter from './usersPatchAvatarRouter.js';
import cardsRouter from './cardsRouter.js';
import cardsPostRouter from './cardsPostRouter.js';
import cardsPutLikeRouter from './cardsPutLike.js';
import cardsDeleteLikeRouter from './cardsDeleteLikeRouter.js';
import cardsDeleteCardRouter from './cardsDeleteCardRouter.js';
import errorPath from './errors.js';
import { login } from '../controllers/login.js';
import createUser from '../controllers/createUser.js';

const router = Router()

router.post('/signin', login);
router.post('/signup', createUser);

router.use('/users', usersRouter);
router.use('/users', usersIdRouter);
router.use('/users', usersPostRouter);
router.use('/users', usersPatchProfileRouter);
router.use('/users', usersPatchAvatarRouter);

router.use('/cards', cardsRouter);
router.use('/cards', cardsPostRouter);
router.use('/cards', cardsDeleteLikeRouter);
router.use('/cards', cardsPutLikeRouter);
router.use('/cards', cardsDeleteCardRouter);
router.use('/', errorPath);


export default router;