import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { CategoryHeader } from '../../Components/Category/CategoryHeader'
import { Link } from 'react-router-dom';
import './Signup.css'


export default function Signup() {

  const EmailValid = (email) =>{
    const emailRegex= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
    return emailRegex.test(email)
 }

 const PasswordValid=(password) => {
   const passwordRegex=/^(?=.*[0-9])(?=.*[!@#$%*])([a-zA-Z0-9!@#$%*]{9,20})$/
   return passwordRegex.test(password)
 }

 const NameValid=(name)=> {
  const nameRegex=/^[a-zA-Z]{8,20}$/ 
  return nameRegex.test(name)
 }

 const navigate = useNavigate()
  
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const[Error, setError] = useState('')
  
  const [emailError,setEmailError]=useState("");
  const [passwordError,setPasswordError]=useState("");
  const [nameError,setNameError]=useState("")
  const [isLoggedin,setIsLoggedin]=useState(false)

  const handleSubmit=(event) => {
    event.preventDefault();
    let user={name,email,password}
    axios.post("http://localhost:4040/user",user).then((res)=>{
      if(res.data[0].password == password){
        setIsLoggedin(true)
        sessionStorage.setItem("id",res.data[0].id)
        sessionStorage.setItem('email',res.data[0].email)
        alert('Signup successful')
        // navigate('/login')
       }
      
      }) .catch((err)=>{console.log(err)})
      CheckEmail();
      CheckPassword();
      CheckName();
    // console.log(user);
  }

  function CheckEmail() {
    if (!EmailValid(email)) {
      return setEmailError('Please enter valid email id')
    }
    else {
      return setEmailError(" ");
    }
  }

  function CheckPassword() {
    if (!PasswordValid(password)) {
      return setPasswordError("Password should have minimum 9 characters with combination of uppercase, lowercase ,numbers and a special character '!@#$%*' ");
    }
    else {
      return setPasswordError(" ");
    }
  }

  function CheckName() {
    if (!NameValid(name)) {
      return setNameError("UserName should contain Minimum 8 Characters with smallcase or lowercase");
    }
    else {
      return setNameError(" ");
    }
  }

  return (
    <>
 
      <div className="signup-box">
        <h1> Sign Up </h1> <br/>
        <h4> Take a minute to signup </h4>
        <form onSubmit={handleSubmit}>
          <label> Name</label>
          <input value={name} onChange={event=>setName(event.target.value)} type="text" placeholder="Enter your name"/>
          <strong className='error-msg'> {nameError} </strong>

          <label> Email</label>
          <input  value={email} onChange={event=>setEmail(event.target.value)} type="text" placeholder="Enter email address"/>
          <strong className='error-msg'> {emailError} </strong>

          <label> Password</label>
          <input value={password} onChange={event=>setPassword(event.target.value)} type="password" placeholder="Enter password"/>
          <strong className='error-msg'> {passwordError} </strong>
          {Error&& <p style={{color:'blue'}}> {Error} </p>} 
          <br/> <br/> <br/>

          <button className='button' type='submit'  disabled={!email}> Signup </button>

          <Link className='signup' to="/login"> 
              <button className='button'> Login </button></Link> 

        </form>   <br/>
{/*       
        <div className="terms">
          <input type="checkbox" id="checkbox" />
            <label htmlFor="checkbox"> I agree to the Terms & Conditions </label>
            
        </div> */}

      </div>

    </>


  )
}


// const [name,setName]=useState("");
//   const [email,setEmail]=useState("");
//   const [password,setPassword]=useState("");
//   // const navigate = useNavigate()
//   const handleSubmit=(event) => {
//     event.preventDefault();
//     let user={name,email,password}
//     axios.post("http://localhost:4040/user",user).then(navigate('/login'))
//     console.log(user);
//   }
//   return (
//     <>
//     {/* <CategoryHeader/> */}
//       <div className="signup-box">
//         <h1> Sign Up </h1> <br/>
//         <h4> Take a minute to signup </h4>
//         <form onSubmit={handleSubmit}>
//           <label> Name</label>
//           <input value={name} onChange={event=>setName(event.target.value)} type="text" placeholder="Enter first name" required/>

//           <label> Email</label>
//           <input  value={email} onChange={event=>setEmail(event.target.value)} type="email" placeholder="Enter email address"  required/>

//           <label> Password</label>
//           <input value={password} onChange={event=>setPassword(event.target.value)} type="password" placeholder="Enter password" required/>

//           <label> Confirm Password</label>
//           <input type="password" placeholder="Re-enter the password"/>

//           {/* <input type="submit" value="Register" /> */}

//           <button type='submit'> Signup </button>

//         </form>

//         <br />
//         <br />
//         <div className="terms">
//           <input type="checkbox" id="checkbox" />
//           {/* <label htmlFor="checkbox"> I agree to these <a href="#">
//             Terms & Conditions </a></label> */}
//             <label htmlFor="checkbox"> I agree to the Terms & Conditions </label>
//         </div>

//       </div>

//     </>

//   )
// }