import Article from '../../models/article';

export default (req, res, next) => {

  Article
    .find()
    .limit(10)
    .sort({ _id: -1 })
    .exec((error, articles) => {
      if (error) return next(error);
      req.articles = articles;
      next();
    });

};
