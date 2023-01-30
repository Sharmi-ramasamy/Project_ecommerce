import React, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
import '../../../Components/Category/SubCategory.css'

export const ShoeSubCategory = ({handleAddProduct}) => {
    const [men, setMen] = useState('')
    const [women, setWomen] = useState('')
    const [kids, setKids] = useState('')
    // const [earings, setEarings] = useState('')

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
            <button className='button-value' onClick={() => setMen(men == 'ShoeMen' ? "" : 'ShoeMen')}> Men </button>
            <button className='button-value'onClick={() => setWomen(women == 'ShoeWomen' ? "" : 'ShoeWomen')}> Women </button>
            <button className='button-value'onClick={() => setKids(kids == 'Kids' ? "" : 'Kids')}> Kids </button>
        </div>
   
    <div className='products'>
    {men == 'ShoeMen' ?
                            getProduct.filter((e) => {
                                if (e.category == 'ShoeMen') {
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
           <button className='product-add-button' onClick={()=>handleAddProduct(e)}> Add to Cart </button>
       </div>
       </div>
    </div>
   
   )) : ' '}    
</div>

<div className='products'>
    {women == 'ShoeWomen' ?
                            getProduct.filter((e) => {
                                if (e.category == 'ShoeWomen') {
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
           <button className='product-add-button' onClick={()=>handleAddProduct(e)}> Add to Cart </button>
       </div>
       </div>
    </div>
   
   )) : ' '}    
</div>

<div className='products'>
    {kids == 'Kids' ?
                            getProduct.filter((e) => {
                                if (e.category == 'Kids') {
                                    return e
                                }
                            }).map((e) => (
                 
                 <div key={e.id}>
    <div  className='productcards'>
                    <div>
            <img className='products-images' src={e.image} alt="ms"/>
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
           <button className='product-add-button' onClick={()=>handleAddProduct(e)}> Add to Cart </button>
       </div>
       </div>
    </div>
   
   )) : ' '}    
</div>


</div>
</>
)
}

   
  