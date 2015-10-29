import Article from '../../models/article'

export default (req, res, next) => {
  Article
    .find()
    .limit(10)
    .sort({ _id: -1 })
    .exec((err, articles) => {
      if (err) return next(err)
      req.articles = articles
      next()
    })
}
