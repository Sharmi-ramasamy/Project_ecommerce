import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CategoryHeader } from '../../Components/Category/CategoryHeader'
import './Signup.css'


export default function Signup() {

  // const [id,setId]=useState("");
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const navigate = useNavigate()
  const handleSubmit=(event) => {
    event.preventDefault();
    let user={name,email,password}
    axios.post("http://localhost:4040/user",user).then(navigate('/login'))
    console.log(user);
  }
  return (
    <>
    {/* <CategoryHeader/> */}
      <div className="signup-box">
        <h1> Sign Up </h1> <br/>
        <h4> Take a minute to signup </h4>
        <form onSubmit={handleSubmit}>
          <label> Name</label>
          <input value={name} onChange={event=>setName(event.target.value)} type="text" placeholder="Enter first name" required/>

          <label> Email</label>
          <input  value={email} onChange={event=>setEmail(event.target.value)} type="email" placeholder="Enter email address"  required/>

          <label> Password</label>
          <input value={password} onChange={event=>setPassword(event.target.value)} type="password" placeholder="Enter password" required/>

          <label> Confirm Password</label>
          <input type="password" placeholder="Re-enter the password"/>

          {/* <input type="submit" value="Register" /> */}

          <button type='submit'> Signup </button>

        </form>

        <br />
        <br />
        <div className="terms">
          <input type="checkbox" id="checkbox" />
          {/* <label htmlFor="checkbox"> I agree to these <a href="#">
            Terms & Conditions </a></label> */}
            <label htmlFor="checkbox"> I agree to the Terms & Conditions </label>
        </div>

      </div>

    </>

  )
}
