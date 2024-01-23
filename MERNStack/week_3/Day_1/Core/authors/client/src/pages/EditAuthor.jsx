import React, { useState, useEffect } from 'react'
import { Link, useParams, useNavigate } from 'react-router-dom'
import axios from 'axios'



const EditAuthor = () => {
    const [error, seterror] = useState({ name: "" })
    const navigate = useNavigate()
    const { id } = useParams()
    const [author, setAuthor] = useState([])
    useEffect(() => {
        axios.get(`http://localhost:8000/api/authors/${id}`).
            then(res => {
                console.log(res.data.data)
                setAuthor(res.data.data)
            })
            .catch(err => console.log(err))

    }, [id])
    const formhandler = (e) => {
        e.preventDefault()
        axios.put(`http://localhost:8000/api/authors/${id}`, author)
            .then(res => {
                console.log(res);
                navigate('/authors')
            })
            .catch(err => {
                console.log(err.response.data.error.errors.name)
                seterror(err.response.data.error.errors.name)
            })
    }
    return (
        <div>
            <h3 className='text-center'><Link className='btn btn-outline-success m-3 ' to={`/authors`}>Home</Link></h3>
            <h1 className='text-center'>Edit this  Author :</h1>
            <div style={{ width: "1400px" }} className=' d-flex justify-content-center'>
                <form onSubmit={(e) => { formhandler(e) }} >
                    <div className="mb-3">
                        <label className="form-label">Author name</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setAuthor({ ...author, name: e.target.value })} value={author.name}
                        />
                        <span className='h4 text-danger'>{error.message}</span>
                    </div>
                    <div className='m-3'>
                        <Link to={'/authors'} className="btn btn-danger m-1 ">Cancel</Link>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditAuthor