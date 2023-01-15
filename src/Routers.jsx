import React from 'react'
import './App.css';
import Header from './Common/Header/Header';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import { Pages } from './Pages/Pages';
import Home from './Pages/HomePage/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { Category } from './Components/Category';



export const Routing = () => {
  return (
    <>

      {/* <Router>   */}

        <Header />
       
         <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='login' element={<Login/>}/>
          <Route path='signup' element={<Signup/>}/>
          <Route path='category' element={<Category/>}/>
          </Routes> 
          {/* <Pages/> */}
      {/* </Router> */}

    </>
  )
}
