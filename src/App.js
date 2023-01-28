import './App.css';
import { Routing } from './Routers';
import { useState } from 'react';
import { CategoryHeader } from './Components/Category/CategoryHeader';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

function App() {
  
  const [cartItems,setCartItems]=useState([])

  const handleAddProduct=(product)=>{
    const ProductExist=cartItems.find((item)=>item.id ===product.id)
    if(ProductExist) {
      setCartItems(cartItems.map((item)=>item.id === product.id ? 
      {...ProductExist,quantity:ProductExist.quantity +1} : item)
      );
    }
      else {
        setCartItems([...cartItems,{...product,quantity:1}]);
      }
    
    }

    const handleRemoveProduct =(product) => {
      const ProductExist=cartItems.find((item)=>item.id ===product.id);
      if(ProductExist.quantity ===1) {
        setCartItems(cartItems.filter((item)=>item.id !== product.id));
      }
      else {
        setCartItems(
          cartItems.map((item)=> item.id === product.id ? {...ProductExist,quantity:ProductExist.quantity - 1}:item
        )
        )
      }
      
    }

    const handleCartClearance=()=> {
        setCartItems([]);
    }

  return (
    <>
        <CategoryHeader/>
        
        <Routing  cartItems={cartItems} handleAddProduct={handleAddProduct} handleRemoveProduct={handleRemoveProduct} handleCartClearance={handleCartClearance}/>
        
    </>
  );
}

export default App;
