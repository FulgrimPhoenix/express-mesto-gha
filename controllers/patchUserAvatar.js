import User from '../models/user.js';

const patchUserAvatar = (req, res, next) => {
  try {
    User.findByIdAndUpdate(
      req.user._id,
      { avatar: req.body.avatar },
      {
        new: true,
        runValidators: true
      }
    )
      .then((user) => {
        if (!user) {
          throw new BadRequest("неверный запрос");
        }
        res.status(200).json(user);
      })
      .catch(next);
  } catch {
    next();
  }
};

export default patchUserAvatar;
