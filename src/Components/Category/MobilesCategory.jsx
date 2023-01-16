import React from 'react'

import './Category.css'

export const MobilesCategory = () => {
  return (
    <>

      <div className='container'>
        <div className='card'>

        <div className='product-image'>
            <a href=''>
              <img src='./Assets/ProductCategory/Mobiles/Basics/BasicMobile.jpeg' alt='' />
              <div className='product-info'>
            <h3> Basics </h3>
              </div> </a>
          </div>
          </div>
         
          <div className='card'>
          <div className='product-image'>
            <a href=''>
              <img src=' /Assets/ProductCategory/Mobiles/Android/AndroidMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Android </h3>
              </div> </a>
          </div>
          </div>

      
          
          <div className='card'>
          <div className='product-image'>
            <a href=''>
              <img src='./Assets/ProductCategory/Mobiles/iphone/IphoneMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Iphone </h3>
              </div> </a>
          </div>
          </div>

          
        
      </div>


    </>
  )
}
