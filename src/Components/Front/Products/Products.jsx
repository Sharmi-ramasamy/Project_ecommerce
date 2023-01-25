import React from 'react'
import { CategoryHeader } from '../../Category/CategoryHeader'
import './Products.css'
import { useState,useEffect } from 'react'
import axios from 'axios'
import { useParams } from 'react-router-dom'

export const Products = ({handleAddProduct}) => {
// const getItems=productItems.filter(proitem=>proitem.category==category && proitem) 

const [items,setItems]=useState();
const params=useParams()
useEffect(() => {
  axios.get("http://localhost:4040/ProductItems?category="+params.category)
  .then(response=>{setItems(response.data);console.log(response.data)})
}, [params])

  return (
    <>

       {/* <CategoryHeader/> */}
      
       <div className='products'>

            {items && items.map((productItem)=>(
                <div key={productItem.id} className='cards'>
                    <div>
                        <img className='products-images' src={productItem.image} alt={productItem.name}/>
                    </div>
                    <div>
                        <h3 className='product-name'> {productItem.name} </h3>
                   </div>
                   <div className='product-price'> $ {productItem.price} </div>

                   <div className='product-details'> {productItem.desc} </div><br/>
                   
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
