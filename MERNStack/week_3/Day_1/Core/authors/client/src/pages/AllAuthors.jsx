
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';


const AllAuthors = () => {
    const [authors, setAuthors] = useState([]);
    const deleteAuthor = (id) => {
        axios.delete('http://localhost:8000/api/authors/'+id)
            .then(response => {
                console.log(response)
                const filtredProduct = authors.filter(author => author._id != id)
                setAuthors(filtredProduct)
            })
            .catch(error => console.log(error))
    }

    useEffect(() => {
        axios.get('http://localhost:8000/api/authors')
            .then(res => {
                console.log(res.data.data);
                setAuthors(res.data.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div>
            <Link className='btn btn-outline-success m-3' to={`/authors/new`}>Add an Author</Link>
            <h1>We have Quotes By :</h1>
            <table className="table table-striped">
                <thead >
                    <tr>
                        <td className='bg-warning'>Authors</td>
                        <td className='bg-secondary'>Action Available</td>
                    </tr>
                </thead>
                <tbody>
                    {authors.map(author => (
                        <tr key={author._id}>
                            <td className='fs-5'>{author.name}</td>
                            <td className='d-flex justify-content-around'>
                                <Link to={`/authors/${author._id}/edit`} className='btn btn-outline-primary' >Edit</Link>
                                <button onClick={()=> deleteAuthor(author._id)} className='btn btn-outline-danger'>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default AllAuthors;