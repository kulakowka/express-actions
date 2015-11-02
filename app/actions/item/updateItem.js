export default (req, res, next) => {
  let {title, text} = req.body
  let item = req.item

  item.title = title
  item.text = text

  item.save((error, item) => {
    if (error) return next(error)
    req.item = item
    next()
  })
}
