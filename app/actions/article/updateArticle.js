import Article from '../../models/article';

export default (req, res, next) => {

  var article = req.article;

  // TODO: hack!!!
  article.title = req.body.title;
  article.text = req.body.text;

  article.save((error, article) => {
    if (error) return next(error);
    req.article = article;
    next();
  });

};
