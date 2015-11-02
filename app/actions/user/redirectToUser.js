export default (req, res, next) => {
  res.redirect('/users/' + req.user.username)
}
