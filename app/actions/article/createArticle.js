import Article from '../../models/article';

/**
 * Сохраняет новую статью в базе данных
 */
export default (req, res, next) => {

  console.log('run');
  var article = new Article(req.body);

  article.save((error, article) => {
    console.log('callback');
    if (error) return next(error);
    req.article = article;
    next();
  });

};
