import User from '../models/user.js';

const patchUser = (req, res, next) => {
  try {
    console.log(req.user);
    User.findByIdAndUpdate(req.user._id, {
      name: req.body.name,
      about: req.body.about,
    }, {
      new: true,
      runValidators: true
    })
      .then((user) => {
        if (!user) {
          throw new BadRequest("неверный запрос");
        }
        return res.status(200).json(user);
      })
      .catch(next);
  } catch {
    next();
  }
};

export default patchUser;
