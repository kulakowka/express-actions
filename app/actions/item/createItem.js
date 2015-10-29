import Item from '../../models/item'

export default (req, res, next) => {
  let item = new Item(req.body)
  item.save((err, item) => {
    if (err) return next(err)
    req.item = item
    next()
  })
}
