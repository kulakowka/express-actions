import Item from '../../models/item'

export default (req, res, next) => {
  Item
    .find()
    .limit(10)
    .sort({ _id: -1 })
    .exec((err, items) => {
      if (err) return next(err)
      req.items = items
      next()
    })
}
