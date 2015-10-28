export default (req, res, next) => {
  res.render('articles/edit', req.article);
};
