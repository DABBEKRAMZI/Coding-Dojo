import React from "react";
import { useState } from "react";

const PersonCard =({person})=>{
    // person: {firs_name: 'Jane', last_name: 'Doe', age: 45, hair_color: 'Black'}
    let [age,setAge]=useState(person.age);
    return(
        <>
            
            <h1>{person.last_name}, {person.firs_name}</h1>
            <p>Age: {age}</p>
            <p>Hair color: {person.hair_color}</p>
            <button onClick={()=>{
                console.log(age);
                return setAge(age+1)}}>Birthday for {person.firs_name} {person.last_name}</button>
        </>
    )
}
export default PersonCard