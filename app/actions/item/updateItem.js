export default (req, res, next) => {
  var item = req.item

  // TODO: hack for example
  item.title = req.body.title
  item.text = req.body.text

  item.save((error, item) => {
    if (error) return next(error)
    req.item = item
    next()
  })
}
