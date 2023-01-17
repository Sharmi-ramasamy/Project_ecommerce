import React from 'react'
import { CategoryHeader } from '../../Components/Category/CategoryHeader'
import './Signup.css'

export default function Signup() {
  return (
    <>
    <CategoryHeader/>
      <div className="signup-box">
        <h1> Sign Up </h1> <br/>
        <h4> Take a minute to signup </h4>
        <form>
          <label> First Name</label>
          <input type="text" placeholder="Enter first name" required />
          <label> Last Name</label>
          <input type="text" placeholder="Enter last name" required/>
          <label> Email</label>
          <input type="email" placeholder="Enter email address" required />
          <label> Password</label>
          <input type="password" placeholder="Enter password" required/>
          <label> Confirm Password</label>
          <input type="password" placeholder="Re-enter the password" required/>
          <input type="button" value="Register" />
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
      {/* <p className="para-2"> Already have an account? <a href="Login.js"> Login Here </a></p> */}
    </>

  )
}
