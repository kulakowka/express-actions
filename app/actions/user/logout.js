export default (req, res, next) => {
  req.logout()
  next()
}
