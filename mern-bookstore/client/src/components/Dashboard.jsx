import { useEffect, useState } from 'react'
import axios from 'axios'
import '../css/Dashboard.css'

const Dashboard = ()=>{
    const [students,setStudents] = useState(0)
    const [admin,setAdmin] = useState(0)
    const [books,setBooks] = useState(0)

    useEffect(()=>{
        axios.get('http://localhost:3000/dashboard')
        .then(res=>{
            if(res.data.ok){
                setStudents(res.data.student)
                setAdmin(res.data.admin)
                setBooks(res.data.book)
            }
        }).catch(err=>console.log(err))
    },[])

    return(
        <div className="dashboard">
            <div className="dashboard-box">
                <h5>Total Books</h5>
                <h2>{books}</h2>
            </div>
            <div className="dashboard-box">
                <h5>Total Students</h5> 
                <h2>{students}</h2>
            </div>
            <div className="dashboard-box">
                <h5>Total Admins</h5> 
                <h2>{admin}</h2>
            </div>

        </div>
    )
}

export default Dashboard