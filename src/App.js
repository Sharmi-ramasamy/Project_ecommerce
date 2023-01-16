

import './App.css';
import { Routing } from './Routers';


import data from './Components/Back/Data/Data'

import { useState } from 'react';

function App() {
  const {productItems}=data;
  const [cartItems,setItems]=useState([])
  return (
    <>
        <Routing productItems={productItems} cartItems={cartItems}/>
        
        
    </>
  );
}

export default App;
