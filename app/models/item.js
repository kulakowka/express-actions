import mongoose from '../db'

var itemSchema = mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  title: String,
  text: String,
  user: String
})

var model = mongoose.model.bind(mongoose)

export default model('Item', itemSchema)
