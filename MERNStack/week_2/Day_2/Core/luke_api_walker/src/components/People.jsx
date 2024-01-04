import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const People = () => {
    const navigate=useNavigate()
    const id=useParams().id
    const [person,setPerson]=useState([])
    useEffect(()=>{
        axios.get(`https://swapi.dev/api/people/${id}`)
        .then(Response =>{
            console.log(Response .data)
            setPerson(Response .data)
        })
        .catch(Error=>{
            console.log(Error)
            navigate('/error')
        })
    },[])
  return (
    <div>
        {person ?
                <div>
                    <h3>People</h3>
                    <h1>{person.name}</h1>
                    <ul>
                        <li>Height : {person.height}</li>
                        <li>Mass : {person.mass}</li>
                        <li>Hair Color : {person.hair_color}</li>
                    </ul>
                </div>
                : <h2> ... loading</h2>}
        </div>
  )
}

export default People