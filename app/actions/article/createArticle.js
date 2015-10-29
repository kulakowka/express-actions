import Article from '../../models/article'

export default (req, res, next) => {
  let article = new Article(req.body)
  article.save((err, article) => {
    if (err) return next(err)
    req.article = article
    next()
  })
}
