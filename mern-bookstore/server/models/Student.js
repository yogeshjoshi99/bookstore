import mongoose from 'mongoose'

const studentSchema = new mongoose.Schema({
    roll:{type:String},
    username:{type:String,required:true,unique:true},
    grade:{type:String},
    password:{type:String,required:true}

})

const StudentModel = mongoose.model('student',studentSchema)

export {StudentModel as Student}