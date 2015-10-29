export default (req, res, next) => {
  res.render('items/show', req.item)
}
