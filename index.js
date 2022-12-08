import dotenv from 'dotenv'
import express from 'express'
import cors from 'cors'
import connectDB from './config/mongo.js'
import Routes from './app/routes/index.js'


dotenv.config()
const app = express()
const port = process.env.PORT || 3000
app.use(cors())
app.use(express.json())
app.use('/api/1.0', Routes)





// Connect to MongoDB
connectDB()
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
