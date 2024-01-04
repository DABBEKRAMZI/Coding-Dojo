import Reac,{useState} from 'react'
import { useNavigate } from 'react-router-dom'

const Form = () => {
    const [id,setId]=useState(0)
    const [type,setType]=useState("people")
    const navigate = useNavigate()
    const search=(e)=>{
        e.preventDefault();
        console.log("person" , id);
        console.log("type" , type);
        navigate(`/${type}/${id}`)
    }

  return (
    <form >
        <div className='form-group d-flex m-3'>
            <div className='d-flex  align-items-center m-3'>
            <label className='m-1' >Search </label>
            <select onChange={(e) => {setType(e.target.value)}} value={type}>
                <option value="people">people</option>
                <option value="planets">planets</option>
            </select>
            </div>
            <input type="number" className='form-control'
            onChange={(e) => { setId(e.target.value)}} value={id}
            />
            <button onClick={(e) => {search(e)}} className='btn btn-outline-secondary m-1 '>    Search</button>
        </div>
        </form>
  )
}

export default Form