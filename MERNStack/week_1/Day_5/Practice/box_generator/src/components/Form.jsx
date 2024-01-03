import React,{useState} from 'react'

const Form = ({addColor}) => {
    const [color,setColor]=useState("")


  return (
    <fieldset>
    <legend>Form</legend>
        <form onSubmit={(event) => {
            event.preventDefault();
            addColor(color);
            setColor("");
        }}>
            <label>Color </label>
            <input type="text" onChange={ (e) => setColor(e.target.value )} value={color}/>
            <button> Add Color </button>
        </form>
    </fieldset>

  )
}

export default Form