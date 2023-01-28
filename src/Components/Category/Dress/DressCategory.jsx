import React from 'react'
import { Link } from 'react-router-dom'

import '../Category.css'
import { CategoryHeader } from '../CategoryHeader'
import { DressSubCategory } from './DressSubCategory'

export const DressCategory = () => {
  return (
    <>

      <DressSubCategory/>

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
