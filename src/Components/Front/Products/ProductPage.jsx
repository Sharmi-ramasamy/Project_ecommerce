import React from 'react'
import { useParams } from 'react-router-dom'
import data from '../../Back/Data/Data'
import { Products } from './Products'

export const ProductPage = ({handleAddProduct}) => {
    const proDetails=useParams()
  return (
    <>
      <Products category={proDetails.category} productItems={data.productItems} handleAddProduct={handleAddProduct} />   

    </>
  )
}
