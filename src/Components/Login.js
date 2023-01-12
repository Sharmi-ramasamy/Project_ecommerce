import React from 'react'
import './Login.css';

export default function Login() {
  return (
    <>
    <div className="login-box">
            <h1> Login </h1>
            <form>
                <label> Username </label>
                <input type="text" placeholder="Enter Your Name"/> 
                <label> Password</label>
                <input type="password" placeholder="Enter password"/> <br/><br/>
                <input type="button" value="Submit"/>
            </form>
            
        </div>
         <p className="para-2"> Not have an account? <a href="Signup.html"> Signup Here</a></p>
         </>


  )
}
