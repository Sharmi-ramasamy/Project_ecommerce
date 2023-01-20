import React from 'react'
import Header from '../../Common/Header/Header'
import Login from '../../Pages/Login/Login'
import './Category.css'
import { CategoryHeader } from './CategoryHeader'
import { Link } from 'react-router-dom'

export const Category = () => {


  return (
    <>

      {/* <CategoryHeader/> */}
      <div className='container'>
        <div className='card'>

          <div className='product-image'>\
          <Link to='/JewelCategory'> 
            {/* <a href='JewelCategory'> */}
              <img src='./Assets/ProductCategory/Jewels/JewelsMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Jewels </h3>
              </div> </Link>
              
          </div>

        </div>
          
          <div className='card'>
          <div className='product-image'>
            <Link to='/MobileCategory'>
            {/* <a href='MobileCategory'> */}
              <img src='./Assets/ProductCategory/Mobiles/MobilesMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Mobiles </h3>
              </div>  </Link>
          </div>
          </div>

          <div className='card'>
          <div className='product-image'>
            <Link to='/ShoeCategory'>
            {/* <a href='ShoeCategory'> */}
              <img src='./Assets/ProductCategory/Shoes/ShoesMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Shoes </h3>
              </div>  </Link>
          </div>
          </div>

          <div className='card'>
          <div className='product-image'>
            <Link to='/DressCategory'> 
            {/* <a href='DressCategory'> */}
              <img src='./Assets/ProductCategory/Dresses/DressesMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Dresses </h3>
              </div> </Link>
          </div>
          </div>

          {/* <div className='card'>
          <div className='product-image'>
            <a href='WatchCategory'>
              <img src='./Assets/ProductCategory/Watches/WatchMain.jpg' alt='' />
              <div className='product-info'>
            <h3> Watches </h3>
              </div> </a>
          </div>
          </div>
           */}




      </div>


    </>
  )
}
