import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import '../../../Components/Category/SubCategory.css'

export const MobileSubCategory = ({handleAddProduct}) => {
    const [redmi, setRedmi] = useState('')
    const [oppo, setOppo] = useState('')
    const [samsung, setSamsung] = useState('') 
    const [vivo,setVivo] = useState('')

    const [getProduct, setGetProduct] = useState([])

    useEffect(() => {
        loadData();
    }, [])

    const loadData = async () => {
        const prodata = await axios.get('http://localhost:4040/ProductItems')
        // console.log(prodata.data);
        setGetProduct(prodata.data)
    }

  return (
   <>

    <div className="wrapper">
        {/* <div id="search-container">
            <input type='search' id='search-input' placeholder='Search product'/>
            <button id='search'> Search </button>
        </div> */}
        <div id="buttons">
            <button className='button-value' onClick={() => setRedmi(redmi == 'Redmi' ? "" : 'Redmi')}> Redmi </button>
            <button className='button-value'onClick={() => setOppo(oppo == 'Oppo' ? "" : 'Oppo')}> Oppo </button>
            <button className='button-value'onClick={() => setSamsung(samsung == 'Samsung' ? "" : 'Samsung')}> Samsung </button>
            <button className='button-value'onClick={() => setVivo(vivo == 'Vivo' ? "" : 'Vivo')}> Vivo </button>
        </div>
   
    <div className='products'>
    {redmi == 'Redmi' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Redmi') {
                                    return e
                                }
                            }).map((e) => (
                 
                 <div key={e.id}>
    <div  className='productcards'>
                    <div>
            <img className='products-images' src={e.image} alt={e.name}/>
            </div>
        
            <h4 className='product-name'> {e.name} </h4>
       
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
           <button className='product-add-button' onClick={()=>handleAddProduct(e,e.id)}> Add to Cart </button>
       </div>
       </div>
    </div>
   
   )) : ' '}    
</div>

<div className='products'>
    {oppo == 'Oppo' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Oppo') {
                                    return e
                                }
                            }).map((e) => (
                 
                 <div key={e.id}>
    <div  className='productcards'>
                    <div>
            <img className='products-images' src={e.image} alt={e.name}/>
            </div>
        
            <h4 className='product-name'> {e.name} </h4>
       
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
           <button className='product-add-button' onClick={()=>handleAddProduct(e,e.id)}> Add to Cart </button>
       </div>
       </div>
    </div>
   
   )) : ' '}    
</div>

<div className='products'>
    {samsung == 'Samsung' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Samsung') {
                                    return e
                                }
                            }).map((e) => (
                 
                 <div key={e.id}>
    <div  className='productcards'>
                    <div>
            <img className='products-images' src={e.image} alt="ms"/>
            </div>
        
            <h4 className='product-name'> {e.name} </h4>
       
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
           <button className='product-add-button' onClick={()=>handleAddProduct(e,e.id)}> Add to Cart </button>
       </div>
       </div>
    </div>
   
   )) : ' '}    
</div>

<div className='products'>
    {vivo == 'Vivo' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Vivo') {
                                    return e
                                }
                            }).map((e) => (
                 
                 <div key={e.id}>
    <div  className='productcards'>
                    <div>
            <img className='products-images' src={e.image} alt="ms"/>
            </div>
        
            <h4 className='product-name'> {e.name} </h4>
       
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

   
  