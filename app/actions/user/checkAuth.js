// Проверяет, пришел ли запрос от авторизованного пользователя
export default (req, res, next) => {
  if (req.query.error) return next(new Error('Not authorised'));
  next();
};
