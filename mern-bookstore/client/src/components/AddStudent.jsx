import "../css/AddStudent.css"
import { useState } from "react"
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const AddStudent  = ()=>{
    const [roll,setRoll] = useState('')
    const [username,setUsername] = useState('')
    const [grade,setGrade] = useState('')
    const [password,setPassword] = useState('')
    const navigate = useNavigate()

    const handleSubmit= (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/student/register',{roll,username,password,grade})
        .then(res =>{
            if(res.data.registered){
                navigate('/dashboard')
            }
        })
        .catch(err =>console.log(err))
    }

    return(
        <div className="student-form-container">
        <form className="student-container" onSubmit={handleSubmit}>
            <h2>Add Student</h2>
            <div className="form-group">
                <label htmlFor="roll">Roll no</label>
                <input type="text" id="roll" name="roll"
                onChange={(e)=>setRoll(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="roll">User Name</label>
                <input type="text" id="username" name="username"
                onChange={(e)=>setUsername(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="roll">Grade</label>
                <input type="text" id="grade" name="grade"
                onChange={(e)=>setGrade(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="roll">Password</label>
                <input type="password" id="password" name="password"
                onChange={(e)=>setPassword(e.target.value)}/>
            </div>
            <button type="submit">Register</button>
        </form>
        </div>
    )
}

export default AddStudent