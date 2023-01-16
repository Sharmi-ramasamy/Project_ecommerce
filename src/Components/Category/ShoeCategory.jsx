import React from 'react'
import './Category.css'

export const ShoeCategory = () => {
  return (
    <>

      <div className='container'>
        <div className='card'>

        <div className='product-image'>
            <a href=''>
              <img src='./Assets/ProductCategory/Shoes/Casuals/CasualsMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Casuals </h3>
              </div> </a>
          </div>
          </div>
         
          <div className='card'>
          <div className='product-image'>
            <a href=''>
              <img src=' /Assets/ProductCategory/Shoes/Formals/FormalsMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Formals </h3>
              </div> </a>
          </div>
          </div>
          
        
      </div>


    </>
  )
}
