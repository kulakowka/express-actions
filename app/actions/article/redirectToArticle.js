// Добавляет пользователя к текущему запросу
export default (req, res, next) => {
  res.redirect('/articles/' + req.article.id);
};
