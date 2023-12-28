import React from 'react'

const Display = ({props}) => {
  return (
    <div className='d-flex flex-column gap-2 '> 
        <h2 className='text-center'>Your Form Data</h2>
    <p>First Name : {props.firstName}</p>
    <p>Last Name : {props.lastName}</p>
    <p>Email : {props.email}</p>
    <p>Password :{props.password}</p>
    <p>Confirm Password : {props.confirm}</p>
    </div>
  )
}

export default Display