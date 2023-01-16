import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryHeader.css'

export const CategoryHeader = () => {
  return (
    <header className='headers'>
        <div>
            <h1>
                <Link to='/' className='logo'>
                    E-Commerce Shop
                </Link>
            </h1>
        </div>

        <div className='headers-links'>

            <ul>
                <li>
                    <Link to='/'> Home </Link>
                </li>
            </ul>
            <ul>
                <li>
                    <Link to='/cart' className='cart'> 
                       <i className='fas fa-shopping-cart'/>
                     </Link>
                </li>
            </ul>



        </div>
    </header>
  )
}
