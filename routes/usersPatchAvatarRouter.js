const patchUserAvatar = require('../controllers/patchUserAvatar')
const { Router } = require("express");

const usersPatchAvatarRouter = Router();

usersPatchAvatarRouter.patch('/me/avatar', patchUserAvatar);

module.exports = usersPatchAvatarRouter;