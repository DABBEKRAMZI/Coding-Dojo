import React, { useState } from 'react'
import Form from '../components/Form'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

const Home = () => {
    const [allProducts, setAllProducts] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8000/api/products/')
        .then(response => {
            setAllProducts(response.data.data);
            console.log(response.data.data);
            // setAllProducts(allProducts.sort((a, b) => a.price - b.price));
            console.log("ahla",allProducts);
        })
        .catch(error => console.log(error))
    },[])
  return (
    <>
    <Form/>
    <h1>All Products</h1>
    {console.log(allProducts)}
    
    {allProducts.length > 0 ? (
        allProducts.map((product, index) => {
          return(
          <div className='d-flex justify-content-between align-items-center mb-3' key={index}><Link to={`/products/${product._id}`} >
            {product.title}
          </Link>
          <Link to={`/products/${product._id}/edit`} className='btn btn-info'>Edit</Link>
          <button className='btn btn-danger' onClick={() => {axios.delete(`http://localhost:8000/api/products/${product._id}`)
          .then(response => {console.log(response);
          setAllProducts(allProducts.filter((p) => p._id !== product._id))  })
          .catch(error => console.log(error)) }}>Delete</button></div>)
})
      ) : (
        <p>Loading...</p>
      )}    </>
  )
}

export default Home