import mongoose from '../db'
import createdAt from './plugins/createdAt'
import updatedAt from './plugins/updatedAt'

// TODO: https://github.com/leepowellcouk/mongoose-validator#readme
var itemSchema = mongoose.Schema({
  title: {type: String, required: true, maxlength: 200, trim: true},
  text: {type: String, required: true, maxlength: 100000, trim: true},
  user: {type: String, required: true}
})

itemSchema.plugin(createdAt, { index: true })
itemSchema.plugin(updatedAt, { index: true })

// Look at this http://stackoverflow.com/a/17960532/1018328
var model = mongoose.model.bind(mongoose)

export default model('Item', itemSchema)
