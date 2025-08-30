import { configDotenv } from 'dotenv'
import express from 'express'
import connectToDatabase from './config/database.js'
import roleRouter from './routes/roleRouter.js'
import userRouter from './routes/userRouter.js'
import customerRouter from './routes/customerRouter.js'
import caseRouter from './routes/caseRouter.js'
import activityRouter from './routes/activityRouter.js'
import cors from 'cors'

configDotenv()
connectToDatabase() 

const app = express()
app.use(express.json())
app.use(cors())

app.use('/api/role', roleRouter)
app.use('/api/user', userRouter)
app.use('/api/customer', customerRouter)
app.use('/api/case', caseRouter)
app.use('/api/activity', activityRouter)

app.listen(3000, ()=>{
    console.log('Server is running..');    
})