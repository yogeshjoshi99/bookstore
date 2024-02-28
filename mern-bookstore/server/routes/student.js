import express from "express"
import bcrypt from 'bcrypt'
import {Student} from '../models/Student.js'
import { verifyAdmin } from './auth.js'

const router = express.Router()

router.post('/register',verifyAdmin, async (req,res)=>{
    try{
    const{username,password,roll,grade} =  req.body
    
    const student = await Student.findOne({username})
    if(student){
        return res.json({message:"student is registerd"})
    }
    const hashpassword = await bcrypt.hash(password,10)
    const newstudent = new Student({
        username,
        password:hashpassword,
        roll:roll,
        grade
    }) 
      await newstudent.save()
      return res.json({registered:true})  
}
catch(err){
    return res.json({message:"Error in registering student"})
}

})

export {router as StudentRouter}