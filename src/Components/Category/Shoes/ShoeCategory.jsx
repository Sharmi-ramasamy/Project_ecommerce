import React from 'react'
import '../Category.css'
import { useState } from 'react'
import { ShoeSubCategory } from './ShoeSubCategory'


export const ShoeCategory = () => {
  const [cartItems,setCartItems]=useState(JSON.parse(sessionStorage.getItem("CartItems")))
  
  const handleAddProduct=(product,productid)=>{

    const ProductExist=cartItems.find((item)=>item.id ===product.id)
    setCartItems(...cartItems,productid)
    console.log(cartItems);
  sessionStorage.setItem("CartItems",JSON.stringify(cartItems))   
    if(ProductExist) {
      setCartItems(cartItems.map((item)=>item.id === product.id ? 
      {...ProductExist,quantity:ProductExist.quantity +1} : item)
      );
    }
      else {
        setCartItems([...cartItems,{...product,quantity:1}]);
      }
    
    }
  return (
    <>

      <ShoeSubCategory handleAddProduct={handleAddProduct}/>

      {/* <CategoryHeader/> */}
      {/* <div className='container'>
        <div className='procard'>

        <div className='product-image'>
        <Link to='/'>
              <img src='./Assets/ProductCategory/Shoes/Casuals/CasualsMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Casuals </h3>
              </div> </Link>
          </div>
          </div>
         
          <div className='procard'>
          <div className='product-image'>
          <Link to='/'>
              <img src=' /Assets/ProductCategory/Shoes/Formals/FormalsMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Formals </h3>
              </div> </Link>
          </div>
          </div>
          
        
      </div> */}


    </>
  )
}
