import mongoose from '../db'

var itemSchema = mongoose.Schema({
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
  title: { type: String, required: true, maxlength: 200, minlength: 5},
  text: { type: String, required: true, maxlength: 100000, minlength: 5},
  user: { type: String, required: true},
})

itemSchema.pre('save', function(next) {
  this.updatedAt = Date.now();
  next();
});

// Look at this http://stackoverflow.com/a/17960532/1018328
var model = mongoose.model.bind(mongoose)

export default model('Item', itemSchema)
