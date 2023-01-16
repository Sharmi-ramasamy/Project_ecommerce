import React from 'react'
import { CategoryHeader } from '../../Category/CategoryHeader'
import './Products.css'

export const Products = ({productItems}) => {
    // const handleAddProduct=(product)=>{
    //         const ProductExist=cartItems.find(item)=>item.id ===product.
    // }
  return (
    <>

       <CategoryHeader/>
       <div className='products'>
            {productItems.map((productItem)=>(
                <div className='cards'>
                    <div>
                        <img className='products-images' src={productItem.image} alt={productItem.name}/>
                    </div>
                    <div>
                        <h3 className='product-name'> {productItem.name} </h3>
                   </div>
                   <div className='product-price'> $ {productItem.price} </div>

                   <div>
                       <button className='product-add-button'> Add to Cart </button>
                   </div>

                </div>
            ))}
       </div>
    </>
  )
}
