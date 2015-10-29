export default (req, res, next) => {
  res.render('items/index', {items: req.items})
}
