import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './components/Form'

function App() {
  const [colors, setColors] = useState(["red","blue"])
  const addColor=(color)=>{
    setColors([...colors,color])
  }

  return (
    <>
    <Form addColor={addColor}/>
    <div style={{display:"flex",justifyContent:'space-around', flexWrap:'wrap',gap:'20px'}}>
    {colors.map((color,idx)=> <div key={idx} style={{backgroundColor:color,height:"100px",width:"100px"}}></div>)}
    </div>
    </>
  )
}

export default App
