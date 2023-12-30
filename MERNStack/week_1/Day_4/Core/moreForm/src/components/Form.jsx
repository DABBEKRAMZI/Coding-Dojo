import React, { useState } from "react";

const Form = (props) => {
    const [firstName, setFirstName] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastName, setLastName] = useState("");
    const [lastNameError, setLastNameError] = useState("")
    const [email, setEmail] = useState("");
    const [emailError, setEmailError] = useState("");
    const [password, setPassword] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const [confirm, setConfirm] = useState("");
    
    

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object - see notes abov
    };
     const user = {firstName,lastName,email,password,confirm};
     const handleFirstName= (e) => {
        setFirstName(e.target.value);
        if(e.target.value.length < 1) {
            setFirstNameError("First Name is required!");
        } else if(e.target.value.length < 3) {
            setFirstNameError("First Name be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setFirstNameError("");
        }
    }
    const handleLastName= (e) => {
        setLastName(e.target.value);
        if(e.target.value.length < 1) {
            setLastNameError("Last Name is required!");
        } else if(e.target.value.length < 3) {
            setLastNameError("Last Name be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setLastNameError("");
        }
    }
    const handleEmail= (e) => {
        setEmail(e.target.value);
        if(e.target.value.length < 1) {
            setEmailError("Email is required!");
        } else if(e.target.value.length < 3) {
            setEmailError("Email be 3 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setEmailError("");
        }
    }
    const handlePassword= (e) => {
        setPassword(e.target.value);
        if(e.target.value.length < 1) {
            setPasswordError("Password is required!");
        } else if(e.target.value.length < 8) {
            setPasswordError("Password be 8 characters or longer!");
        } else {
            // an empty string is considered a "falsy" value
            setPasswordError("");
        }

    }
        
    return (
        <div className="d-flex justify-content-center ">
            <form className="d-flex flex-column gap-3 " onSubmit={createUser}>
                <div className="form-group row align-items-center bg-secondary ">
                <label className="col-4 col-form-label">First Name :</label>
                <div className="col-8">
                <input type="text" className="form-control"  onChange={handleFirstName}  />
                </div>
                {
                    firstNameError ?
                    <p>{ firstNameError }</p> :""
                }
                
                </div>
                <div className="form-group row align-items-center bg-secondary">
                <label className="col-4 col-form-label">Last Name :</label>
                <div className="col-8">
                <input type="text" className="form-control" onChange={handleLastName}  />
                </div>
                {
                    lastNameError ?
                    <p>{ lastNameError }</p> :""
                }
                </div>
                <div className="form-group row align-items-center bg-secondary">
                <label className="col-4 col-form-label">Email :</label>
                <div className="col-8">
                <input type="text" className="form-control" onChange={handleEmail}  />
                </div>
                {
                    emailError ?
                    <p>{ emailError }</p> :""
                }
                </div>
                <div className="form-group row align-items-center bg-secondary">
                <label className="col-4 col-form-label">Password :</label>
                <div className="col-8">
                <input type="password" className="form-control" onChange={handlePassword}  />
                </div>
                {
                    passwordError ?
                    <p>{ passwordError }</p> :""
                }
                {
                    confirm!=password ?
                    <p>password must be match</p> :""
                }
                </div>
                <div className="form-group row align-items-center bg-secondary">
                <label className="col-4 col-form-label">Confirm Password :</label>
                <div className="col-8">
                <input type="password" className="form-control" onChange={(e)=>{
                    setConfirm(e.target.value);}}  />
                </div>
                </div>
            </form>
        </div>
          
    );
};

export default Form;
