import React from 'react'
import { Link } from 'react-router-dom'

import '../Category.css'
import { CategoryHeader } from '../CategoryHeader'

export const JewelCategory = () => {
  return (
    <>

    <CategoryHeader/>
      <div className='container'>
        <div className='card'>

          <div className='product-image'>
            <Link to={'/Products/Bangles'}>
              <img src='./Assets/ProductCategory/Jewels/Bangles/BanglesMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Bangles </h3>
              </div> </Link>
          </div>

        </div>

          <div className='card'>
          <div className='product-image'>
            <Link to='/Products/Necklace'>
              <img src='./Assets/ProductCategory/Jewels/Necklace/NecklaceMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Necklace </h3>
              </div> </Link>
          </div>
          </div>

          <div className='card'>
          <div className='product-image'>
            <Link to='/Products/Ring'> 
              <img src='./Assets/ProductCategory/Jewels/Ring/RingMain.png' alt='' />
              <div className='product-info'>
            <h3> Ring </h3>
              </div> </Link>
          </div>
          </div>

          <div className='card'>
          <div className='product-image'>
            <Link t0='/Products/Earings'> 
              <img src='./Assets/ProductCategory/Jewels/Earings/EaringsMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Earings </h3>
              </div> </Link>
          </div>
          </div>
          




      </div>


    </>
  )
}
