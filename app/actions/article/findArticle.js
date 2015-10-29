import Article from '../../models/article'

export default (req, res, next) => {
  Article
    .findById(req.params.id)
    .exec((err, article) => {
      if (err) return next(err)
      req.article = article
      next()
    })
}
