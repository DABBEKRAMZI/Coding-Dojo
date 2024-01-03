import { useState } from 'react'
import axios from 'axios'
import './App.css'

function App() {
  const [pokemons, setPokemons] = useState([])

  return (
    <>
    <button onClick={()=>{
      axios.get("https://pokeapi.co/api/v2/pokemon")
      .then(response => {
        console.log("RESPONSE :", response.data.results);
        setPokemons( response.data.results)
        console.log("fetchpokemons : ", pokemons)
      })
      // .then(response => {
      //   console.log("FETCH API RESPONSE AS JSON : ", response.results)
      //   setPokemons(response.results)
      //   console.log("fetchpokemons : ", pokemons)
      // })
      .catch(error => console.log("FETCH API ERROR :", error))
    }}>Axios Pokemons</button>
     <ul>
    {/* {JSON.stringify(pokemons)} */}
    {pokemons.map((p,i) => {
      return (<li key={i}> {p.name} </li>)
      })}
    {/* {pokemons[0].name} */}
    </ul>
      
    </>
  )
}

export default App
