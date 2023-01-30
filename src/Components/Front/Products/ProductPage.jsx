import React from 'react'
import { MobilesCategory } from '../../Category/Mobiles/MobilesCategory'
import { MobileSubCategory } from '../../Category/Mobiles/MobileSubCategory'
import { Products } from './Products'

export const ProductPage = ({handleAddProduct}) => {
   
  return (
    <>
      {/* <Products  handleAddProduct={handleAddProduct} />    */}
      < MobilesCategory handleAddProduct={handleAddProduct}/>
      <MobileSubCategory handleAddProduct={handleAddProduct}/>

    </>
  )
}
