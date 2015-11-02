export default (req, res, next) => {
  res.render('users/show', req.user)
}
