import React from 'react'
import { Link } from 'react-router-dom'
import './CategoryHeader.css'
import { useNavigate } from 'react-router-dom'

export const CategoryHeader = ({cartItems}) => {
    const navigate=useNavigate()
  const handleChange =()=> {
    console.log('done');
      if (sessionStorage.getItem("email")){
navigate('/category')
      }
      else {
        navigate('/login')
      }
  }
  
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
            
            
                <li id='category' onClick={handleChange}>
                    <Link to='/Category'> Category </Link>
                </li>

              
                 {/* <a id='category' onClick={handleChange}>Category 
                   </a>  */}

            
            
                <li>
                    <Link to='/cart' className='cart'> 
                       <i className='fas fa-shopping-cart'/>
                        {/* <span className='cart-length'> 
                            {cartItems.length ===0 ?  "" : cartItems.length}
                        </span> */}
                     </Link>
                </li>
            </ul>



        </div>
    </header>
  )
}
