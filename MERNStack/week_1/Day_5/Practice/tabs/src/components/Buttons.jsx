import React from 'react'

const Buttons = ({buttons,setCurrent}) => {
    const clickHandler=(idx)=>{
        setCurrent(buttons[idx])
        
    }

  return (
    <div>
        {buttons.map((button,idx) => <button key={idx} onClick={clickHandler(idx)}>{button}</button>)}
    </div>
  )
}

export default Buttons