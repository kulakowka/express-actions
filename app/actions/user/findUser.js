import User from '../../models/user'

export default (req, res, next) => {
  User
    .findOne({username: req.params.username})
    .exec((err, user) => {
      if (err) return next(err)
      req.user = user
      next()
    })
}
