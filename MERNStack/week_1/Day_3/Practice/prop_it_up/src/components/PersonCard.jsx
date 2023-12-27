import React from "react";

const PersonCard =(props)=>{
    // person: {firs_name: 'Jane', last_name: 'Doe', age: 45, hair_color: 'Black'}
    console.log(props);
    return(
        <>
            
            <h1>{props.person.last_name}, {props.person.firs_name}</h1>
            <p>Age: {props.person.age}</p>
            <p>Hair color: {props.person.hair_color}</p>

        <>
    )
}
export default PersonCard