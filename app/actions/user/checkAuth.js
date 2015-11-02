export default (req, res, next) => {
  if (!req.user) return res.redirect('/users/sign_in')
  next()
}
