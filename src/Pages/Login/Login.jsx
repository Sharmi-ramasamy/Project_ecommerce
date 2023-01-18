import React, { useEffect, useState } from 'react'
import { CategoryHeader } from '../../Components/Category/CategoryHeader';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';

export default function Login() {
  const EmailValid=() =>{}
  const PasswordValid=() => {}
  const navigate=useNavigate();
  const [getInput,setGetInput]=useState({email:"",password:""})

  const [emailError,setEmailError]=useState("");
  const [passwordError,setPasswordError]=useState("");

  useEffect(()=> {
    sessionStorage.clear();
  },[]);

  const handle=(event) => {
    setGetInput({...getInput, [event.target.name]: event.target.value});
  }

  const handleSubmit=(event) =>{
    event.preventDefault();
  }
  CheckMail();
  CheckPassword();

  // 
  
  function CheckMail() {
    if (!EmailValid(getInput.email)) {
      return setEmailError('Please Enter Valid Email Id')
    }
    else {
      return setEmailError("");
    }
  }

  function CheckPassword() {
    if (!PasswordValid(getInput.password)) {
      return setPasswordError('must contain uppercase,lowercase,number and a special character');
    }
    else {
      return setPasswordError("");
    }
  }

  return (
    <>
    <CategoryHeader/>
    <div className="login-box">
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
                <label> Username </label>
                <input type="text" placeholder="Enter Your Name" name='name' onChange={handle} required/> 
                <strong> {emailError} </strong>

                <label> Password</label>
                <input type="password" placeholder="Enter password" name='password' onChange={handle} required/>
                <strong> {passwordError} </strong> <br/><br/>

                <input type="button" value="Submit"/>
            </form>
            
        </div>
         {/* <p className="para-2"> Not have an account? Please Signup </p> */}
         {/* <p className="para-2"> Not have an account? <link to='Signup.js'> Signup Here </link></p> */}

         </>


  )
}
