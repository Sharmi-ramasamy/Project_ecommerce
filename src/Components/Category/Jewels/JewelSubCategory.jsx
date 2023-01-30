import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '../../../Components/Category/SubCategory.css'
import {handleAddProduct} from '../../../Routers'

export const JewelSubCategory = ({handleAddProduct}) => {
    const [bangle, setBangle] = useState('')
    const [necklace, setNecklace] = useState('')
    const [ring, setRing] = useState('')
    const [earings, setEarings] = useState('')

    const [getProduct, setGetProduct] = useState([])

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const prodata = await axios.get('http://localhost:4040/ProductItems')
        setGetProduct(prodata.data)
    }

    return (
        <>

           <div className="wrapper">
       
        <div id="buttons">
            <button className='button-value' onClick={() => setBangle(bangle == 'Bangles' ? "" : 'Bangles')}> Bangle </button>
            <button className='button-value'onClick={() => setNecklace(necklace == 'Necklace' ? "" : 'Necklace')}> Necklace </button>
            <button className='button-value'onClick={() => setRing(ring == 'Ring' ? "" : 'Ring')}> Ring </button>
            <button className='button-value'onClick={() => setEarings(earings == 'Earings' ? "" : 'Earings')}> Earings </button>
        </div>
   
    <div className='products'>
    {bangle == 'Bangles' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Bangles') {
                                    return e
                                }
                            }).map((e) => (
                 
                 <div key={e.id}>
    <div  className='productcards'>
                    <div>
            <img className='products-images' src={e.image} alt={e.name}/>
            </div>
        
            <h3 className='product-name'> {e.name} </h3>
       
       <div className='product-price'> $ {e.price} </div>

       <div className='product-details'> {e.desc} </div><br/>
       
      <div className='product-rating'> 
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
      </div>
      
       <div>
           <button className='product-add-button' onClick={()=>{console.log(e.name);handleAddProduct(e,e.id)}}> Add to Cart </button>
       </div>
       </div>
    </div>
   
   )) : ' '}    
</div>

<div className='products'>
    {necklace == 'Necklace' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Necklace') {
                                    return e
                                }
                            }).map((e) => (
                 
                 <div key={e.id}>
    <div  className='productcards'>
                    <div>
            <img className='products-images' src={e.image} alt={e.name}/>
            </div>
        
            <h3 className='product-name'> {e.name} </h3>
       
       <div className='product-price'> {e.price} </div>

       <div className='product-details'> {e.desc} </div><br/>
       
      <div className='product-rating'> 
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
      </div>
      
       <div>
           <button className='product-add-button' onClick={()=>handleAddProduct(e,e.id)}> Add to Cart </button>
       </div>
       </div>
    </div>
   
   )) : ' '}    
</div>

<div className='products'>
    {ring == 'Ring' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Ring') {
                                    return e
                                }
                            }).map((e) => (
                 
                 <div key={e.id}>
    <div  className='productcards'>
                    <div>
            <img className='products-images' src={e.image} alt="ms"/>
            </div>
        
            <h3 className='product-name'> {e.name} </h3>
       
       <div className='product-price'> {e.price} </div>

       <div className='product-details'> {e.desc} </div><br/>
       
      <div className='product-rating'> 
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
      </div>
      
       <div>
           <button className='product-add-button' onClick={()=>handleAddProduct(e,e.id)}> Add to Cart </button>
       </div>
       </div>
    </div>
   
   )) : ' '}    
</div>

<div className='products'>
    {earings == 'Earings' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Earings') {
                                    return e
                                }
                            }).map((e) => (
                 
                 <div key={e.id}>
    <div  className='productcards'>
                    <div>
            <img className='products-images' src={e.image} alt="ms"/>
            </div>
        
            <h3 className='product-name'> {e.name} </h3>
       
       <div className='product-price'> {e.price} </div>

       <div className='product-details'> {e.desc} </div><br/>
       
      <div className='product-rating'> 
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
        <i className='fa fa-star'></i>
      </div>
      
       <div>
           <button className='product-add-button' onClick={()=>handleAddProduct(e,e.id)}> Add to Cart </button>
       </div>
       </div>
    </div>
   
   )) : ' '}    
</div>

</div>
</>
)
}

   
  