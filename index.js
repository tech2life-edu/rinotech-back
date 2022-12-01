import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongo.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())



// Connect to MongoDB
connectDB()
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
