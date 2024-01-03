import { useState } from 'react'
import './App.css'
import Buttons from './components/Buttons';
import Display from './components/Display';
function App() {
  const [buttons, setButtons] = useState(['tab1','tab2','tab3','tab4']);
  const [current,setCurrent]=useState("");

  return (
    <>
     <Buttons buttons={buttons} setCurrent={setCurrent}/>
      <Display current={current}/>

    </>
  )
}

export default App
