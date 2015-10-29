export default (req, res, next) => {
  if (req.article.user !== req.session.user) return next(new Error('Access denied'))
  next()
}
