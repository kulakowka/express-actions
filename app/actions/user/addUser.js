// Добавляет пользователя к текущему запросу
export default (req, res, next) => {

  // Эмулируем запрос к БД
  setTimeout(function() {

    req.body.user = 'kulakowka';  // костыль :) для теста
    next();

  }, 500);

};
