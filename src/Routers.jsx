import React from 'react'
import './App.css';
import Header from './Common/Header/Header';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import { Pages } from './Pages/Pages';
import Home from './Pages/HomePage/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { Category } from './Components/Category/Category';
import { JewelCategory } from './Components/Category/JewelCategory';
import { MobilesCategory } from './Components/Category/MobilesCategory';
import { ShoeCategory } from './Components/Category/ShoeCategory';
import { WatchCategory } from './Components/Category/WatchCategory';



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
          <Route path='jewelcategory' element={<JewelCategory/>}/>
          <Route path='mobilecategory' element={<MobilesCategory/>}/>
          <Route path='shoecategory' element={<ShoeCategory/>}/>
          <Route path='watchcategory' element={<WatchCategory/>}/>
          </Routes> 
          {/* <Pages/> */}
      {/* </Router> */}

    </>
  )
}
