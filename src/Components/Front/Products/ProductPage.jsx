import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../Back/Data/Data'
import { Products } from './Products'

export const ProductPage = ({handleAddProduct}) => {
   
  return (
    <>
      <Products  handleAddProduct={handleAddProduct} />   

    </>
  )
}
