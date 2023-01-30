import React from 'react'
import { Link, Navigate } from 'react-router-dom'
// import './Android.css'
import { CategoryHeader } from '../CategoryHeader'
import { MobileSubCategory } from './MobileSubCategory'
import { useState } from 'react'


export const MobilesCategory = () => {
  const [cartItems,setCartItems]=useState(JSON.parse(sessionStorage.getItem("CartItems")))
  
  const handleAddProduct=(product,productid)=>{

    const ProductExist=cartItems.find((item)=>item.id ===product.id)
    // var ProductExist=false;
    // var cartItems=sessionStorage.getItem("CartItems");
    // if(cartItems!=null)
    // {
    //   ProductExist=true;
    // }
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
    <MobileSubCategory handleAddProduct={handleAddProduct}/>
      {/* <div className='container'> */}
     
       
         
      {/* <div className='card'>
          <div className='product-image'>
          <Link to='/products/AndroidRedmi'>
              <img src=' /Assets/ProductCategory/Mobiles/Redmi/RedmiMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Redmi </h3>
              </div> </Link>
          </div>
          </div>

      
          
          <div className='card'>
          <div className='product-image'>
          <Link to='/products/AndroidOppo'>
              <img src='./Assets/ProductCategory/Mobiles/Oppo/OppoMain.png' alt='' />
              <div className='product-info'>
            <h3> Oppo </h3>
              </div> </Link>
          </div>
          </div>

          <div className='card'>
          <div className='product-image'>
          <Link to='/products/AndroidSamsung'>
              <img src='./Assets/ProductCategory/Mobiles/Samsung/SamsungMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Samsung </h3>
              </div> </Link>
          </div>
          </div>
 */}
          
        
      {/* </div> */}


    </>
  )
}
