export default (req, res, next) => {
  res.render('articles/index', {articles: req.articles})
}
