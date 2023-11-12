import React from 'react'
import {Routes, Route} from 'react-router-dom'
import ProductsPage from './ProductsPage'
import Product from '../components/Product'
import CategoryPage from './CategoryPage'

const Shop = () => {
  return (
    <Routes>
      <Route index element={<ProductsPage/>} />
      <Route path='/:category' element={<CategoryPage/>}/>
    </Routes>
  )
}

export default Shop