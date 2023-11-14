const patchUser = require('../controllers/patchUser')
const { Router } = require("express");

const usersPatchProfileRouter = Router();

usersPatchProfileRouter.patch('/me', patchUser);

module.exports = usersPatchProfileRouter;