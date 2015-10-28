import Article from '../../models/article';

export default (req, res, next) => {

  Article
    .findById(req.params.id)
    .exec((error, article) => {
      if (error) return next(error);
      req.article = article;
      next();
    });

};
