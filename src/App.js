import './App.css';
import { Routing } from './Routers';
import { useState ,useEffect} from 'react';
import { CategoryHeader } from './Components/Category/CategoryHeader';
import axios from 'axios';

function App() {
  
  
    const handleRemoveProduct =(product) => {

      console.log(product.id)
      let items=JSON.parse(sessionStorage.getItem("CartItems"));
      let cart=items.filter((item)=>{if(item.id!==product.id) return item})

      sessionStorage.setItem("CartItems",JSON.stringify(cart));
    
    }

    

  return (
    <>
        <CategoryHeader/>
        
        <Routing handleRemoveProduct={handleRemoveProduct}/>
        
    </>
  );
}

export default App;
