import mongoose from '../db';

var schema = mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  title: String,
  text: String,
  user: String,
});

var Model = mongoose.model('Article', schema);

export default Model;
