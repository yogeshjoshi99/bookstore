import "../css/AddStudent.css"
import { useState } from "react"
import { useNavigate} from 'react-router-dom'
import axios from 'axios'

const AddBook = ()=>{
    const [name,setName] = useState('')
    const [author,setAuthor] = useState('')
    const [imageUrl,setImageUrl] = useState('')
   
    const navigate = useNavigate()

    const handleSubmit= (e) =>{
        e.preventDefault()
        axios.post('http://localhost:3000/book/add',{name,author,imageUrl})
        .then(res =>{
            if(res.data.added){
                navigate('/books')
            }
            else{
                console.log(res)
            }
        })
        .catch(err =>console.log(err))
    }

    return(
        <div className="student-form-container">
        <form className="student-container" onSubmit={handleSubmit}>
            <h2>Add Book</h2>
            <div className="form-group">
                <label htmlFor="roll">Book Name</label>
                <input type="text" id="book" name="book"
                onChange={(e)=>setName(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="roll">Author</label>
                <input type="text" id="author" name="author"
                onChange={(e)=>setAuthor(e.target.value)}/>
            </div>
            <div className="form-group">
                <label htmlFor="roll">Image Url</label>
                <input type="text" id="image" name="image"
                onChange={(e)=>setImageUrl(e.target.value)}/>
            </div>
            <button type="submit">Add book</button>
        </form>
        </div>
    )
}

export default AddBook