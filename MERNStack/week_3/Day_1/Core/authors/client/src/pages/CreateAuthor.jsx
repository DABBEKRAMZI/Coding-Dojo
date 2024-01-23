import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const CreateAuthor = () => {
const [error , seterror] =useState({ name: "" })
    const [newAuthor, setnewAuthor] = useState({ name: "" })
    const Navigate = useNavigate()
    const createAuthor = (e) => {
        e.preventDefault()
        axios.post(`http://localhost:8000/api/authors`, newAuthor).
            then(res => {
                console.log(res);
                Navigate('/authors')
            })
            .catch(err => {
                console.log(err.response.data.error.errors.name)
                seterror(err.response.data.error.errors.name)
                })
    }
    return (
        <div >
            <h3 className='text-center'><Link className='btn btn-outline-success m-3 ' to={`/authors`}>Home</Link></h3>
            <h1 className='text-center'>Add  a new Author :</h1>
            <div style={{ width: "1400px" }} className=' d-flex justify-content-center'>
                <form onSubmit={(e) => createAuthor(e)}>
                    <div className="mb-3">
                        <label className="form-label">Author name</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setnewAuthor({ ...newAuthor, name: e.target.value })}
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

export default CreateAuthor