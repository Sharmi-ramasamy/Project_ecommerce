import React from 'react'
import { CategoryHeader } from '../../Components/Category/CategoryHeader';
import './Login.css';

export default function Login() {
  return (
    <>
    <CategoryHeader/>
    <div className="login-box">
            <h1> Login </h1>
            <form>
                <label> Username </label>
                <input type="text" placeholder="Enter Your Name" required/> 
                <label> Password</label>
                <input type="password" placeholder="Enter password" required/> <br/><br/>
                <input type="button" value="Submit"/>
            </form>
            
        </div>
         {/* <p className="para-2"> Not have an account? Please Signup </p> */}
         {/* <p className="para-2"> Not have an account? <link to='Signup.js'> Signup Here </link></p> */}

         </>


  )
}
