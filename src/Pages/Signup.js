import React from 'react'
import './Login.css'

export default function Signup() {
  return (
    <>
      <div className="signup-box">
        <h1> Sign Up </h1>
        <h4> Take a minute to signup </h4>
        <form>
          <label> First Name</label>
          <input type="text" placeholder="Enter first name" />
          <label> Last Name</label>
          <input type="text" placeholder="Enter last name" />
          <label> Email</label>
          <input type="email" placeholder="Enter email address" />
          <label> Password</label>
          <input type="password" placeholder="Enter password" />
          <label> Confirm Password</label>
          <input type="password" placeholder="Re-enter the password" />
          <input type="button" value="Submit" />
        </form>
        <br />
        <br />
        <div className="terms">
          <input type="checkbox" id="checkbox" />
          <label htmlFor="checkbox"> I agree to these <a href="#">
            Terms & Conditions </a></label>
        </div>

      </div>
      <p className="para-2"> Already have an account? <a href="Login.js"> Login Here </a></p>
    </>

  )
}
