import { useState } from 'react'
import { Routes,Route, useParams } from 'react-router-dom'
import './App.css'


const Home =()=>{
  console.log('winek sava');
  return <h1>Welcome</h1>
}



const Page=()=>{
  const number=useParams().input
  if (isNaN(+number)) {return <h1>the word is : {number} </h1>}
  else {return <h1>the Number is : {number}</h1>
    }
  
}
const Hello=()=>{
  console.log('winek sava')
  const hello=useParams().input
  const word=useParams().word
  const color1=useParams().color1
  const color2=useParams().color2
  console.log('hello function',word,color1,color2);
  return <div style={{backgroundColor:`${color1}`,color:`${color2}`,width:'100%'}}><h1 >the word is : {word}</h1></div>
}


function App() {
  const [count, setCount] = useState(0)
  const { input } = useParams();
  return (
    <>
    <Routes>
      <Route path='/Home' element={<Home/>}/>

      <Route path="/:input" element={<Page/>}/>
    
    

    <Route path='/:word/:color1/:color2' element={<Hello/>}/>

    </Routes>
    </>
  )
}

export default App
