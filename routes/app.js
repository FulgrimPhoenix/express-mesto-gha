import { Router } from 'express';
import usersRouter from './usersRouter.js';
import usersIdRouter from './userIdRouter.js';
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
import { usersMeRouter } from './usersMeRouter.js';
import { auth } from '../middlewares/auth.js';

const router = Router()

router.post('/signin', login);
router.post('/signup', createUser);

router.use(auth);
router.use('/users', usersRouter);
router.use('/users', usersMeRouter);
router.use('/users', usersIdRouter);
router.use('/users', usersPatchProfileRouter);
router.use('/users', usersPatchAvatarRouter);


router.use('/cards', cardsRouter);
router.use('/cards', cardsPostRouter);
router.use('/cards', cardsDeleteLikeRouter);
router.use('/cards', cardsPutLikeRouter);
router.use('/cards', cardsDeleteCardRouter);
router.use('/', errorPath);

export default router;

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NTViNzJkNzJhOWQ0MDBlNzZkNzkwNGMiLCJpYXQiOjE3MDA3MzQ1MjksImV4cCI6MTcwMTMzOTMyOX0.kjl0AR45WegxvGvj3UfQLqp4-NNFL12NdqKDypmGoRg