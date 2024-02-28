import express from "express"
import dotenv from "dotenv"
import cors from 'cors'
import cookieParser from 'cookie-parser'
import './db.js'
import {AdminRouter} from './routes/auth.js'
import { StudentRouter } from "./routes/student.js"
import { bookRouter } from "./routes/book.js"
import { Student } from "./models/Student.js"
import { Book } from "./models/Book.js"
import { Admin } from "./models/Admin.js"

const app = express()
app.use(express.json())
app.use(cors({
    origin:['http://localhost:5173'],
    credentials:true
}))
app.use(cookieParser())
dotenv.config()
app.use('/auth',AdminRouter)
app.use('/student',StudentRouter)
app.use('/book',bookRouter)

app.get('/dashboard',async(req,res)=>{
    try{
        const student = await Student.countDocuments()
        const admin = await Admin.countDocuments()
        const book = await Book.countDocuments()

        return res.json({ok:true,student,admin,book})
    }
    catch(err){
        return res.json(err)
    }
})

app.listen(process.env.PORT, ()=>{
    console.log(`app is listening on port ${process.env.PORT}`)
})