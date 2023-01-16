import React from 'react'
import { CategoryHeader } from '../../Category/CategoryHeader'

export const Cart = ({cartItems,handleAddProduct,handleRemoveProduct}) => {
    const totalPrice=cartItems.reduce((price,item)=> price + item.quantity * item.price, 0)
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
                    <div className='cart-items-name'> {item.name} </div>
                    <div className='cart-items-function'>
                        <button className='cart-items-add' onClick={()=>handleAddProduct(item)}> + </button>
                        <button className='cart-items-remove' onClick={()=>handleRemoveProduct(item)}> - </button>
                    </div>

                    <div className='cart-items-price'>
                        {item.quantity} * ${item.price}

                    </div>

                    </div>
                ))}
            </div>

            <div className='cart-items-total-price-name'>
                    Total price
                <div className='cart-items-total-price'> ${totalPrice} </div>
            </div>



        </div>  
    </>
  )
}
