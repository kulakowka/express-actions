export default (req, res, next) => {
  var article = req.article

  // TODO: hack for example
  article.title = req.body.title
  article.text = req.body.text

  article.save((error, article) => {
    if (error) return next(error)
    req.article = article
    next()
  })
}
