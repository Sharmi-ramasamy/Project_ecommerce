import React from 'react'
import { Products } from './Products'

export const ProductPage = ({handleAddProduct}) => {
   
  return (
    <>
      <Products  handleAddProduct={handleAddProduct} />   

    </>
  )
}
