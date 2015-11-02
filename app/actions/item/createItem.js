import Item from '../../models/item'

export default (req, res, next) => {
  let {title, text, user} = req.body
  let item = new Item({title, text, user})
  item.save((err, item) => {
    if (err) return next(err)
    req.item = item
    next()
  })
}
