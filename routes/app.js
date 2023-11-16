const { Router } = require('express');
const usersRouter = require('./usersRouter');
const usersIdRouter = require('./userIdRouter');
const usersPostRouter = require('./userPostRouter');
const usersPatchProfileRouter = require('./usersPatchProfileRouter');
const usersPatchAvatarRouter = require('./usersPatchAvatarRouter');
const cardsRouter = require('./cardsRouter');
const cardsPostRouter = require('./cardsPostRouter');
const cardsPutLikeRouter = require('./cardsPutLike');
const cardsDeleteLikeRouter = require('./cardsDeleteLikeRouter');
const cardsDeleteCardRouter = require('./cardsDeleteCardRouter');
const errorPath = require('./errors');

const router = Router()

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


module.exports = router;