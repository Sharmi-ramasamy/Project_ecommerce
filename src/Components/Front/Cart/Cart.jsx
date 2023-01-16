import React from 'react'
import { CategoryHeader } from '../../Category/CategoryHeader'

export const Cart = ({cartItems}) => {
  return (
    <>
    <CategoryHeader/>
        <div className='cart-items'>
            <div className='cart-item-header'> Cart Items </div>
            
            {cartItems.length===0 && (
                <div className='cart-item-empty'> No Items are Added. </div>
            )}

            <div>
                {cartItems.map((item)=>(
                    <div key={item.id} className='cart-item-list'> 
                    <img className='cart-item-image' src={item.image} alt={item.name}/>
                    </div>
                ))}
            </div>



        </div>  
    </>
  )
}
