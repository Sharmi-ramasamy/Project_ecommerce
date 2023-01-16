
// import { Router } from 'react-router-dom';
import './App.css';
import { Routing } from './Routers';
// import { Pages } from './Pages/Pages';
// import {Routers } from './Routers';

import data from './Components/Back/Data/Data'
import { RoutesProduct } from './RoutesProduct';
import { useState } from 'react';

function App() {
  const {productItems}=data;
  const [cartItems,setItems]=useState([])
  return (
    <>
        <Routing productItems={productItems} cartItems={cartItems}/>
        {/* <RoutesProduct/> */} 
        
    </>
  );
}

export default App;
