import dotenv from 'dotenv'
import express from 'express'
import connectDB from './config/db.js'
import cookieParser from 'cookie-parser'
import authRoutes from './routes/authRoutes.js'
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
const app = express()
app.use(cors())
dotenv.config()
app.use(express.json())
app.use(cookieParser())
connectDB()

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/', (req, res) => {
  res.send('<h1>Hello World</h1>')
})
app.use('/api/auth', authRoutes)
app.use('/api/users', userRoutes)



const PORT = process.env.PORT || 5000
const server = app.listen(
  PORT,
  console.log(
    `Server running in ${'development'} mode on port ${PORT}`
  )
)