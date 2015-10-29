export default (req, res, next) => {
  res.redirect('/items/' + req.item.id)
}
