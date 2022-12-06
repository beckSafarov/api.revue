import { Schema } from 'mongoose'

const commentModel = Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    reviewId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      default: new Date()
    },
  }
)


const Comment = mongoose.model('Comment', commentModel)
export default Comment