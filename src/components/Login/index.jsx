import { useState } from "react";

import { useNavigate } from "react-router-dom";

import "./index.css"



const Login = ()=>{
     const [username,setUsername] = useState("");

     const [password,setPassword] = useState("");

     const navigate = useNavigate();


     const [isError,setError] = useState(false);

     const onChangingUsername = (event)=>{
        setUsername(event.target.value);
     }

     const onChangingPassword = (event)=>{
        setPassword(event.target.value);
     }

     const onSuccessfulLogin = ()=>{
         navigate("/home");
     }

     const onFailedLogin = ()=>{
        setError(true);
     }

     const validateUserCredintials=()=>{
        if(username !== "" && password !== ""){
            onSuccessfulLogin()
        }

        else{
            onFailedLogin()
        }
     }

     const submitLoginDetails = ()=>{
        validateUserCredintials()
     }

  
     const onSubmittingForm = (event)=>{
        event.preventDefault();
        submitLoginDetails();
     }

     return(
     <div className="login-bg-container">
        <form onSubmit={onSubmittingForm} className="login-card-container">
            <div className="input-el-and-label-container">
               <label className="username-label" htmlFor="username">Username</label><br/>
               <input type="text" className="username-input-element" id="username" value = {username} onChange={onChangingUsername}/>
            </div>
            <div className="input-el-and-label-container">
               <label className="username-label" htmlFor="password">Password</label><br/>
               <input type="password" className="username-input-element" id="password" value = {password} onChange={onChangingPassword}/>
            </div>
            <div className = 'submit-btn-container'>
                <button className = "submit-btn" type="submit" >Submit</button>
            </div>
            {isError &&<div>
                <p className = "error-msg">*Invalid Credentials</p>
             </div>}
        </form>
        </div>
     )
}


export default Login;