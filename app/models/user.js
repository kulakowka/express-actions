import mongoose from '../db'
import createdAt from './plugins/createdAt'
import updatedAt from './plugins/updatedAt'

var userSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
    maxlength: 50,
    minLength: 3,
    index: true,
    trim: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  }
})

userSchema.methods.validPassword = function (password) {
  return this.password === password
}

userSchema.plugin(createdAt)
userSchema.plugin(updatedAt)

var model = mongoose.model.bind(mongoose)

export default model('User', userSchema)
