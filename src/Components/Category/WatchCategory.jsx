import React from 'react'

import './Category.css'
import { CategoryHeader } from './CategoryHeader'

export const WatchCategory = () => {
  return (
    <>
        {/* <CategoryHeader/> */}
      <div className='container'>
        <div className='card'>

          <div className='product-image'>
            <a href=''>
              <img src='./Assets/ProductCategory/Watches/Fastrack/Fastrack.jpeg' alt='' />
              <div className='product-info'>
            <h3> Fastrack </h3>
              </div> </a>
          </div>

        </div>
          
          <div className='card'>
          <div className='product-image'>
            <a href=''>
              <img src='./Assets/ProductCategory/Watches/Titan/Titan.png' alt='' />
              <div className='product-info'>
            <h3> Titan </h3>
              </div> </a>
          </div>
          </div>

          <div className='card'>
          <div className='product-image'>
            <a href=''>
              <img src='./Assets/ProductCategory/Watches/Smartwatch/Smartwatch.jpeg' alt='' />
              <div className='product-info'>
            <h3> Smart Watch </h3>
              </div> </a>
          </div>
          </div>

          <div className='card'>
          <div className='product-image'>
            <a href=''>
              <img src='./Assets/ProductCategory/Watches/SmartBandWatch/Smartbandwatch.jpg' alt='' />
              <div className='product-info'>
            <h3> SmartBand Watch </h3>
              </div> </a>
          </div>
          </div>
          




      </div>


    </>
  )
}
