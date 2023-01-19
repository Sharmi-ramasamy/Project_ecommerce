import React from 'react'
import { Link } from 'react-router-dom'
import '../Category.css'
import { CategoryHeader } from '../CategoryHeader'

export const MobilesCategory = () => {
  return (
    <>
      <CategoryHeader/>
      <div className='container'>
        <div className='card'>

        <div className='product-image'>
            <Link to='/'>
              <img src='./Assets/ProductCategory/Mobiles/Basics/BasicMobile.jpeg' alt='' />
              <div className='product-info'>
            <h3> Basics </h3>
              </div> </Link>
          </div>
          </div>
         
          <div className='card'>
          <div className='product-image'>
          <Link to='/'>
              <img src=' /Assets/ProductCategory/Mobiles/Android/AndroidMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Android </h3>
              </div> </Link>
          </div>
          </div>

      
          
          <div className='card'>
          <div className='product-image'>
          <Link to='/'>
              <img src='./Assets/ProductCategory/Mobiles/iphone/IphoneMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Iphone </h3>
              </div> </Link>
          </div>
          </div>

          
        
      </div>


    </>
  )
}
