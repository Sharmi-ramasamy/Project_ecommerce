import React from 'react'
import { CategoryHeader } from '../../Category/CategoryHeader'
import './Products.css'

export const Products = ({productItems,category,cartItems,handleAddProduct}) => {
const getItems=productItems.filter(proitem=>proitem.category==category && proitem) 

  return (
    <>

       <CategoryHeader/>
      
       <div className='products'>

            {getItems.map((productItem)=>(
                <div className='cards'>
                    <div>
                        <img className='products-images' src={productItem.image} alt={productItem.name}/>
                    </div>
                    <div>
                        <h3 className='product-name'> {productItem.name} </h3>
                   </div>
                   <div className='product-price'> $ {productItem.price} </div>
                  <div className='product-rating'> 
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                    <i className='fa fa-star'></i>
                  </div>
                   <div>
                       <button className='product-add-button' onClick={()=>handleAddProduct(productItem)}> Add to Cart </button>
                   </div>
              
                </div>
            ))}
       </div>
    </>
  )
}
