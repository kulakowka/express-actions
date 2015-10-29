import {Schema, model} from '../db'

var articleSchema = Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  title: String,
  text: String,
  user: String
})

export default model('Article', articleSchema)
