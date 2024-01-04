import React from 'react'
import { useEffect,useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const Planet = () => {
    const navigate=useNavigate()
    const id=useParams().id
    const [planet,setPlanet]=useState(null)
    useEffect(()=>{
    axios.get(`https://swapi.dev/api/planets/${id}`)
        .then(Response =>{
            console.log(Response .data)
            setPlanet(Response .data)
        })
        .catch(Error=>{
            console.log(Error)
            navigate('/error')
        })
    },[])
  return (
    <div>{planet ?
        <div>
            <h3>People</h3>
            <h1>{planet.name}</h1>
            <ul>
                <li>terrain : {planet.terrain}</li>
                <li>surface_water : {planet.surface_water}</li>
                <li>population : {planet.population}</li>
            </ul>
        </div>
        : <h2> ... loading</h2>}
</div>
  )
}

export default Planet