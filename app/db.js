import mongoose from 'mongoose'

mongoose.connect(process.env.MONGO_URL || 'mongodb://localhost/express_actions_v1')

export default mongoose
