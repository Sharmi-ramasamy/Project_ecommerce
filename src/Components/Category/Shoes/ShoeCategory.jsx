import React from 'react'
import '../Category.css'
import { CategoryHeader } from '../CategoryHeader'
import { Link } from 'react-router-dom'


export const ShoeCategory = () => {
  return (
    <>

      <CategoryHeader/>
      <div className='container'>
        <div className='card'>

        <div className='product-image'>
        <Link to='/'>
              <img src='./Assets/ProductCategory/Shoes/Casuals/CasualsMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Casuals </h3>
              </div> </Link>
          </div>
          </div>
         
          <div className='card'>
          <div className='product-image'>
          <Link to='/'>
              <img src=' /Assets/ProductCategory/Shoes/Formals/FormalsMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Formals </h3>
              </div> </Link>
          </div>
          </div>
          
        
      </div>


    </>
  )
}
