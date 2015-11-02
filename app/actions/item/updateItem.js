export default (req, res, next) => {
  let {title, text} = req.body
  let item = req.item

  Object.assign(item, {title, text})

  item.save((error, item) => {
    if (error) return next(error)
    req.item = item
    next()
  })
}
