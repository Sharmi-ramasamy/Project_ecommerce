import React, { useEffect, useState } from 'react'
import  Axios from 'axios'
import '../../Category.css'
import { CategoryHeader } from '../../CategoryHeader'
import { Link } from 'react-router-dom'


export const MensCategory = () => {

  // const [datas,setDatas]=useState([]);
  // useEffect(()=>{
  //   loaddata();
  // },[1])

  // const loaddata = async()=> {
  //   const resp =await Axios.get('http://localhost:4040/products?id=4').then((e)=>{console.log(e);setDatas(e.data)}).catch((err)=>{console.log(err)})
   
  // }

  return (
    <>
        {/* <CategoryHeader/> */}
       
       <div className='container'>

          <div className='card'>
          <div className='product-image'>
            <Link to='/products/Formals'>
              <img src='./Assets/ProductCategory/Dresses/Mens/Casual/CasualsMenMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Casual </h3>
              </div> </Link>
          </div>
          </div>

          <div className='card'>
          <div className='product-image'>
            <Link to='/products/Casuals'>
              <img src='./Assets/ProductCategory/Dresses/Mens/Formal/FormalMenMain.jpeg' alt='' />
              <div className='product-info'>
            <h3> Formals </h3>
              </div> </Link>
          </div>
          </div>
          </div> 


    {/* {datas.map((e)=>(
      <div key={e.id}>{e.productname} {e.image}</div>
      
    ))} */}


{/* <div className='container'>

<div className='card'>
<div className='product-image'>
  <a href='Products'>
    <img src='./Assets/ProductCategory/Dresses/Mens/Casual/CasualsMenMain.jpeg' alt='' />
    <div className='product-info'>
  <h3> Casual </h3>
    </div> </a>
</div>
{datas.map((e)=>(
      <div key={e.id}>{e.productname} {e.image}</div>
      
    ))}

</div>

</div> */}

   

        

      


    </>
  )
}
