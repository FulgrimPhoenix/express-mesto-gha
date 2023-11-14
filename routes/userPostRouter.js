const postUser = require('../controllers/postUser')
const { Router } = require("express");

const usersPostRouter = Router();

usersPostRouter.post('/', postUser);

module.exports = usersPostRouter;