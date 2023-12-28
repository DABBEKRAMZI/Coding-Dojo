import React, { useState } from "react";
import Display from "./display";
const Form = (props) => {

    // const [user,setUser]  = useState(
    //     {firstName:"",lastName:"",email:"",password:"",confirm}
    // );
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirm, setConfirm] = useState("");
    

    const createUser = (e) => {
        // we must prevent the default refresh of the browser to keep our state from being reset
        e.preventDefault();

        // shorthand ES6 syntax for building an object - see notes abov
    };
     const user = {firstName,lastName,email,password,confirm};
        

    return (
        <div className="d-flex flex-column align-items-center  mt-4">
            <form className="d-flex flex-column gap-3 " onSubmit={createUser}>
                <div className="form-group row align-items-center bg-secondary ">
                <label className="col-4 col-form-label">First Name :</label>
                <div className="col-8">
                <input type="text" className="form-control"  onChange={(e)=>setFirstName(e.target.value)}  />
                </div>
                
                </div>
                <div className="form-group row align-items-center bg-secondary">
                <label className="col-4 col-form-label">Last Name :</label>
                <div className="col-8">
                <input type="text" className="form-control" onChange={(e)=>setLastName(e.target.value)}  />
                </div>
                </div>
                <div className="form-group row align-items-center bg-secondary">
                <label className="col-4 col-form-label">Email :</label>
                <div className="col-8">
                <input type="text" className="form-control" onChange={(e)=>setEmail(e.target.value)}  />
                </div>
                </div>
                <div className="form-group row align-items-center bg-secondary">
                <label className="col-4 col-form-label">Password :</label>
                <div className="col-8">
                <input type="password" className="form-control" onChange={(e)=>setPassword(e.target.value)}  />
                </div>
                </div>
                <div className="form-group row align-items-center bg-secondary">
                <label className="col-4 col-form-label">Confirm Password :</label>
                <div className="col-8">
                <input type="password" className="form-control" onChange={(e)=>setConfirm(e.target.value)}  />
                </div>
                </div>

            </form>
            <Display props={user} />
        </div>
          
    );
};

export default Form;
