import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Products } from '../../Front/Products/Products'
import axios from 'axios'
import '../Category.css'
import { CategoryHeader } from '../CategoryHeader'
import { useEffect } from 'react'
import { JewelSubCategory } from './JewelSubCategory'

export const JewelCategory = () => {


    return (
    <>

    <JewelSubCategory/>

    {/* <CategoryHeader/> */}
      {/* <div className='container'>
        <div className='procard'>

          <div className='product-image'>
            <Link to={'/products/Bangles'}>
              <img src='./Assets/ProductCategory/Jewels/Bangles/BanglesMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Bangles </h3>
              </div> </Link>
          </div>

        </div>

          <div className='procard'>
          <div className='product-image'>
            <Link to='/products/Necklace'>
              <img src='./Assets/ProductCategory/Jewels/Necklace/NecklaceMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Necklace </h3>
              </div> </Link>
          </div>
          </div>

          <div className='procard'>
          <div className='product-image'>
            <Link to='/products/Ring'> 
              <img src='./Assets/ProductCategory/Jewels/Ring/RingMain.png' alt='' />
              <div className='product-info'>
            <h3> Ring </h3>
              </div> </Link>
          </div>
          </div>

          <div className='procard'>
          <div className='product-image'>
            <Link to='/products/Earings'> 
              <img src='./Assets/ProductCategory/Jewels/Earings/EaringsMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Earings </h3>
              </div> </Link>
          </div>
          </div>
          




      </div> */}


    </>
  )
}
