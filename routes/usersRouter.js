const getUsers = require('../controllers/getUsers')
const { Router } = require("express");

const usersRouter = Router();

usersRouter.get('/', getUsers);

module.exports = usersRouter;