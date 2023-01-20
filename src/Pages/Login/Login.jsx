import React, { useEffect, useState } from 'react'
import { CategoryHeader } from '../../Components/Category/CategoryHeader';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import axios from 'axios';
import { LoginHeader } from './LoginHeader';


export default function Login() {
  
  const EmailValid = (email) =>{
   
     const emailRegex= /^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/
     return emailRegex.test(email)
  
  }
  const PasswordValid=(password) => {
    const passwordRegex=/^(?=.*[0-9])(?=.*[!@#$%*])([a-zA-Z0-9!@#$%*].{9,16})$/
    return passwordRegex.test(password)
  }

  const navigate=useNavigate();
  // const [input,setInput]=useState({email:"",password:""})
  const[useremail,setUserEmail] = useState("")
  const[userpassword,setUserPassword] = useState('')
  const[Error, setError] = useState('')

  const [emailError,setEmailError]=useState("");
  const [passwordError,setPasswordError]=useState("");
  // const [successMessage,setSuccessMessage]=useState("")
  const [isLoggedin,setIsLoggedin]=useState(false)



  // const handleChange=(event) => {
  //   // setInput({...input, [event.target.name]: event.target.value});
    
  // }

  const handleSubmit=(event) =>{
    event.preventDefault();
    // console.log(input);
    axios.get("http://localhost:4040/user?email="+useremail).then((res)=>{
       if(res.data[0].password == userpassword){
        setIsLoggedin(true)
        sessionStorage.setItem("id",res.data[0].id)
        sessionStorage.setItem('email',res.data[0].email)
        navigate('/category')
       }
       else{
        setError("Invalid credential")
        navigate('/signup')
       }
    
    // console.log(res.data[0])
        // setIsLoggedin(true)
        // navigate("/category")
      
      
    }).catch((err)=>{console.log(err)})
    // const validate= EmailValid(input.email)
    // console.log(validate);
    CheckEmail();
    // console.log('Email Validation Success');
    CheckPassword();
    // console.log('Password Validation Success');

    // if (input.email !== 'admin@gmail.com' || input.password !== 'Password@1' 
    // return setEmailError
    // )
  }

  
  function CheckEmail() {
    if (!EmailValid(useremail)) {
      return setEmailError('Please enter valid email id')
    }
    else {
      return setEmailError(" ");
    }
  }

  function CheckPassword() {
    if (!PasswordValid(userpassword)) {
      return setPasswordError("Password should have minimum 9 characters with combination of uppercase, lowercase ,numbers and a special character '!@#$%*' ");
    }
    else {
      return setPasswordError(" ");
    }
  }

  return (
    <>
    {/* <CategoryHeader/> */}
    {/* <LoginHeader/> */}
    <div className="login-box">
            <h1> Login </h1>
            <form onSubmit={handleSubmit}>
            
                <label> Email </label>
                <input type="text" placeholder="Enter Email Id " name='email' onChange={(e)=>setUserEmail(e.target.value)} required /> 
                <strong className='error-msg'> {emailError} </strong>

                <label> Password</label>
                <input type="password" placeholder="Enter password" name='password' onChange={(e)=>setUserPassword(e.target.value)} required  />
                <strong className='error-msg'> {passwordError} </strong>
                {Error&&<p style={{color:'blue'}}>{Error}</p>}

                <input type="submit" value="Login"/>
            </form>
            
        </div>
         
         </>


  )
}
