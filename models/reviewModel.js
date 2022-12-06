import { Schema } from 'mongoose'
// import bcrypt from 'bcryptjs'

const reviewModel = Schema(
  {
    authorId: {
      type: Schema.Types.ObjectId,
      required: true,
    },
    revName: {
      type: String,
      required: true,
    },
    revItemName: {
      type: String,
      required: true,
    },
    body: {
      type: String,
      required: true,
    },
    tags: [String],
    category: {
      type: String,
      required: true,
      enum: ['book', 'movie', 'game']
    },
    image: String,
    ratings: [Object],//{authorId, rating}
    likes: [Schema.Types.ObjectId],//likers
    comments: [Schema.Types.ObjectId],
    date: {
      type: Date,
      default: new Date()
    },
  }
)


const Review = mongoose.model('User', reviewModel)
export default Review