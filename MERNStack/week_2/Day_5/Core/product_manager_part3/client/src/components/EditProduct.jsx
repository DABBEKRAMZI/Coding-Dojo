import React, { useEffect } from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'


const EditProduct = () => {
    const [product, setProduct] = useState({title: '', price: 0, description: ''})
    const navigate=useNavigate()
    const { id } = useParams()
    useEffect(() => {
      axios
        .get('http://localhost:8000/api/products/'+id)
        .then((res) => {
          console.log(res.data)
          setProduct(res.data.data)
        })
        .catch((err) => console.log(err))
        
    },[])
    const updateProduct = (e) => {
      e.preventDefault()
      axios
        .put('http://localhost:8000/api/products/'+id, product)
        .then((res) => {
          console.log(res.data)
          navigate('/')
        })
        .catch((err) => console.log(err))
    }
  return (
    <form onSubmit={(e) => updateProduct(e)}>
    <div className="form-group mb-3">
      <label htmlFor=""> Title</label>
      <input
        type="text"
        className="form-control"
        onChange={(e) => setProduct({ ...product, title: e.target.value })}
        value={product.title}
      />
    </div>
    <div className="form-group mb-3">
      <label htmlFor=""> Price</label>
      <input
        type="number"
        className="form-control"
        onChange={(e) =>
          setProduct({ ...product, price: e.target.value })
        }
        value={product.price}
      />
    </div>

    <div className="form-group mb-3">
      <label htmlFor=""> Description</label>
      <input
        type="text"
        className="form-control"
        onChange={(e) =>
          setProduct({ ...product, description: e.target.value })
        }
        value={product.description}
      />
    </div>
    <button className='btn btn-success btn-lg w-50'>Update</button>
  </form>
  )
}

export default EditProduct