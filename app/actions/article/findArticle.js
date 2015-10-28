import Article from '../../models/article';

/**
 * Ищет статью по req.params.id и прикрепляет ее к запросу
 */
export default (req, res, next) => {

  Article
    .findById(req.params.id)
    .exec((error, article) => {
      if (error) return next(error);
      req.article = article;
      next();
    });

};
