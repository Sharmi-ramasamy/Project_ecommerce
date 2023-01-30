import React from 'react'
import './App.css';
import { BrowserRouter as Router, Route,Routes } from 'react-router-dom'
import Home from './Pages/HomePage/Home';
import Login from './Pages/Login/Login';
import Signup from './Pages/Signup/Signup';
import { Category } from './Components/Category/Category';
import {JewelCategory} from './Components/Category/Jewels/JewelCategory'
import { MobilesCategory } from './Components/Category/Mobiles/MobilesCategory';
import { ShoeCategory } from './Components/Category/Shoes/ShoeCategory';
import { WatchCategory } from './Components/Category/Watch/WatchCategory';
import { DressCategory } from './Components/Category/Dress/DressCategory';
import { ProductPage } from './Components/Front/Products/ProductPage';
import { Cart } from './Components/Front/Cart/Cart';





export const Routing = ({cartItems,handleAddProduct,handleRemoveProduct,handleCartClearance}) => {


  
  
  return (
    <>

     
       
         <Routes>

          <Route path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/category' element={<Category/>}/> 
          <Route path='jewelcategory' element={<JewelCategory />}/>
          <Route path='mobilecategory' element={<MobilesCategory/>}/>
          <Route path='shoecategory' element={<ShoeCategory/>}/>
          <Route path='watchcategory' element={<WatchCategory/>}/>
          <Route path='dresscategory' element={<DressCategory/>}/>
          {/* <Route path='product/:category' element={<ProductPage handleAddProduct={handleAddProduct}/>}/> */}
          <Route path='cart' element={<Cart cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance} />}/>
        
          </Routes>   
        

    </>
  )
}
