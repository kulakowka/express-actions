export default (req, res, next) => {
  req.session.user = 'kulakowka'; // hack

  if (!req.session.user) return next(new Error('Not authorised'));

  next();
};
