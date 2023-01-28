import React from 'react'
import { Link, Navigate } from 'react-router-dom'
import './Android.css'
import { CategoryHeader } from '../CategoryHeader'
// import { SubCategory } from '../SubCategory'
import { MobileSubCategory } from './MobileSubCategory'

export const MobilesCategory = () => {
  return (
    <>
    
      <div className='container'>
       {/* <SubCategory/> */}
       <MobileSubCategory/>
         
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
          
        
      </div>


    </>
  )
}
