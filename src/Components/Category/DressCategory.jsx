import React from 'react'

import './Category.css'
import { CategoryHeader } from './CategoryHeader'

export const DressCategory = () => {
  return (
    <>
        <CategoryHeader/>
      <div className='container'>

          <div className='card'>
          <div className='product-image'>
            <a href='MensCategory'>
              <img src='./Assets/ProductCategory/Dresses/Mens/MensMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Mens </h3>
              </div> </a>
          </div>
          </div>

          <div className='card'>
          <div className='product-image'>
            <a href=''>
              <img src='./Assets/ProductCategory/Dresses/Womens/WomensMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Womens </h3>
              </div> </a>
          </div>
          </div>

    <div className='card'>

     <div className='product-image'>
        <a href=''>
       <img src='./Assets/ProductCategory/Dresses/Kids/KidsMain.jpeg' alt='' />
       <div className='product-info'>
           <h3> Kids </h3>
       </div> </a>
     </div>

    </div>

        

      </div>


    </>
  )
}
