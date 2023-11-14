const getUserById = require('../controllers/getUserById')
const { Router } = require("express");

const usersIdRouter = Router();

usersIdRouter.get('/:id', getUserById);

module.exports = usersIdRouter;