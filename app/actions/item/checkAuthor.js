export default (req, res, next) => {
  if (req.item.user !== req.session.user) return next(new Error('Access denied'))
  next()
}
