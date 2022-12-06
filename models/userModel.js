import {Schema} from 'mongoose'

const userSchema = Schema(
  {
    name: {
      type: String, 
      required: true, 
    },
    email: {
      type: String,
      unique: true, 
      required: true 
    },
    authMethod: {
      type: String,
      required: true,
      enum: ['google', 'fb'],
    },
    reviews: [Schema.Types.ObjectId],
    comments: [Schema.Types.ObjectId],
    regDate: {
      type: Date, 
      default: new Date()
    },
  }
)


const User = mongoose.model('User', userSchema)
export default User