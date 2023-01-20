
import React from 'react'
import { Link } from 'react-router-dom'
import './Android.css'
import { CategoryHeader } from '../CategoryHeader'

export const AndroidCategory = () => {
  return (
    <>
      {/* <CategoryHeader/> */}
      <div className='container'>
        {/* <div className='card'>

        <div className='product-image'>
            <Link to='/'>
              <img src='./Assets/ProductCategory/Mobiles/Basics/BasicMobile.jpeg' alt='' />
              <div className='product-info'>
            <h3> Basics </h3>
              </div> </Link>
          </div>
          </div> */}
         
          <div className='card'>
          <div className='product-image'>
          <Link to='/products/AndroidRedmi'>
              <img src=' /Assets/ProductCategory/Mobiles/Android/Redmi/RedmiMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Redmi </h3>
              </div> </Link>
          </div>
          </div>

      
          
          <div className='card'>
          <div className='product-image'>
          <Link to='/products/AndroidOppo'>
              <img src='./Assets/ProductCategory/Mobiles/Android/Oppo/OppoMain.png' alt='' />
              <div className='product-info'>
            <h3> Oppo </h3>
              </div> </Link>
          </div>
          </div>

          
        
      </div>


    </>
  )
}
