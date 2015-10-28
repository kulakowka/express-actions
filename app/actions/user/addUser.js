export default (req, res, next) => {
  //req.body.user = req.session.user;
  req.body.user = 'kulakowka';
  next();
};
