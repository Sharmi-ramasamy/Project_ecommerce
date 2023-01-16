import React from 'react'
import Header from '../../Common/Header/Header'
import './Category.css'

export const Category = () => {
  return (
    <>

      <div className='container'>
        <div className='card'>

          <div className='product-image'>
            <a href='JewelCategory'>
              <img src='./Assets/ProductCategory/Jewels/JewelsMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Jewels </h3>
              </div> </a>
              
          </div>

        </div>
          
          <div className='card'>
          <div className='product-image'>
            <a href='MobileCategory'>
              <img src='./Assets/ProductCategory/Mobiles/MobilesMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Mobiles </h3>
              </div> </a>
          </div>
          </div>

          <div className='card'>
          <div className='product-image'>
            <a href='ShoeCategory'>
              <img src='./Assets/ProductCategory/Shoes/ShoesMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Shoes </h3>
              </div> </a>
          </div>
          </div>

          <div className='card'>
          <div className='product-image'>
            <a href='WatchCategory'>
              <img src='./Assets/ProductCategory/Watches/WatchMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Watches </h3>
              </div> </a>
          </div>
          </div>
          




      </div>


    </>
  )
}
