import React from 'react'

import './Category.css'
import { CategoryHeader } from './CategoryHeader'

export const MensCategory = () => {
  return (
    <>
        <CategoryHeader/>
      <div className='container'>

          <div className='card'>
          <div className='product-image'>
            <a href='Products'>
              <img src='./Assets/ProductCategory/Dresses/Mens/Casual/CasualsMenMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Casual </h3>
              </div> </a>
          </div>
          </div>

          <div className='card'>
          <div className='product-image'>
            <a href=''>
              <img src='./Assets/ProductCategory/Dresses/Mens/Formal/FormalMenMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Formals </h3>
              </div> </a>
          </div>
          </div>

    

   

        

      </div>


    </>
  )
}
