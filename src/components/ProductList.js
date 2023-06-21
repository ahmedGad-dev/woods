import React from 'react'
import GridView from './GridView'
import ListView from './ListView'
import Product from './Product'
import styled from 'styled-components'
import { useFilterContext } from '../context/filter_context'

const ProductList = () => {
  const {filtered_products: products, grid_view} = useFilterContext();

  if(products.length < 1) {
    return (<h5 style={{textTransform: 'none'}}> Sorry No Products Match Your Search</h5>)
  } 

  if(grid_view === false) {
    return <ListView products={products}/>
  }

  return  <GridView products={products}>  product list  </GridView>
}

export default ProductList
