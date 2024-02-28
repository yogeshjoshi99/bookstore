import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'

const Navbar = ({role})=>{
    return(
        <div className='navbar'>
            <div className='navbar-left'>
                <Link className='navbar-brand'>Book Store</Link>
            </div>
            <div className='navbar-right'>
                <Link to ="/books" className='navbar-link'>Books</Link>
                {role === "admin" && <>
                   <Link to ="/login" className='navbar-link'>Login</Link>
                   <Link to ="/addbook" className='navbar-link'>Addbook</Link>
                   <Link to ="/addstudent" className='navbar-link'>Addstudent</Link>
                   <Link to ="/dashboard" className='navbar-link'>Dashboard</Link>
                   </>
                }
                {role === "" ?
                <Link to ="/login" className='navbar-link'>login</Link>
                : <Link to ="/logout" className='navbar-link'>Logout</Link>
                }
             
                
            </div>
        </div>
    )
}

export default Navbar