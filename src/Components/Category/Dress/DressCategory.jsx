import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import '../Category.css'
import { DressSubCategory } from './DressSubCategory'

export const DressCategory = () => {
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

      <DressSubCategory handleAddProduct={handleAddProduct}/>

        {/* <CategoryHeader/> */}
      {/* <div className='container'>

          <div className='procard'>
          <div className='product-image'>
            <Link to='/MensCategory'>
              <img src='./Assets/ProductCategory/Dresses/Mens/MensMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Mens </h3>
              </div> </Link>
          </div>
          </div>

          <div className='procard'>
          <div className='product-image'>
            <Link to='/'>
              <img src='./Assets/ProductCategory/Dresses/Womens/WomensMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Womens </h3>
              </div> </Link>
          </div>
          </div>

    <div className='procard'>

     <div className='product-image'>
     <Link to='/'>
       <img src='./Assets/ProductCategory/Dresses/Kids/KidsMain.jpeg' alt='' />
       <div className='product-info'>
           <h3> Kids </h3>
       </div> </Link>
     </div>

    </div>

        

      </div> */}


    </>
  )
}
