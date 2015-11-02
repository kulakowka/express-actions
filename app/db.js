import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/express_actions_v2')

mongoose.set('debug', false)

var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'))

export default mongoose
