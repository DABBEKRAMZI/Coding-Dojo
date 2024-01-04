import { useState } from 'react'
import { Routes,Route} from 'react-router-dom'
import Form from './components/Form'
import People from './components/People'
import Error from './components/Error'
import Planet from './components/Planet'

function App() {
  const Home =()=>{
    return <div><h1 style={{color : 'blue', marginLeft : '250px'}}> welcome to my humble web site </h1> </div>
  }

  return (
    <>
    <div className='container'>
      <Form/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/people/:id' element={<People/>}/>
        <Route path='/planets/:id'element={<Planet/>}/>
        <Route path='/Error' element={<Error/>}/>
        <Route path='/*' element={<Error/>}/>

      </Routes>

    </div>
    </>
  )
}

export default App
