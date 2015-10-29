import mongoose from '../db'

var itemSchema = mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  title: String,
  text: String,
  user: String
})

// Look at this http://stackoverflow.com/a/17960532/1018328
var model = mongoose.model.bind(mongoose)

export default model('Item', itemSchema)
