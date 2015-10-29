export default (req, res, next) => {
  res.render('articles/show', req.article)
}
