import Item from '../../models/item'

export default (req, res, next) => {
  Item
    .findById(req.params.id)
    .exec((err, item) => {
      if (err) return next(err)
      req.item = item
      next()
    })
}
