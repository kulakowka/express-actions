import User from '../../models/user'

export default (req, res, next) => {
  let {username, password} = req.body
  let user = new User({username, password})

  user.save((err, user) => {
    if (err) return next(err)
    if (!user) return next(new Error('user not created'))
    req.user = user
    next()
  })
}
