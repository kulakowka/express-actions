export default (req, res, next) => {
  res.render('items/edit', req.item)
}
