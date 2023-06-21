import axios from 'axios'
import React, { useContext, useEffect, useReducer, } from 'react'
import products_reducer from '../reducers/products_reducer'
import { products_url as url } from '../utils/constants'

import {
  SIDEBAR_OPEN,
  SIDEBAR_CLOSE,
  GET_PRODUCTS_BEGIN,   //for loading
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_ERROR,
  GET_SINGLE_PRODUCT_BEGIN,
  GET_SINGLE_PRODUCT_SUCCESS,
  GET_SINGLE_PRODUCT_ERROR,
} from '../actions'
import { useState } from 'react'

const initialState = {
  isSidebarOpen: false,
  products_loading: false,
  products_error: false,
  products: [],
  featured_products: [],
  single_product_loading: false,
  single_product_error: false,
  single_product: {},
}

const ProductsContext = React.createContext()

export const ProductsProvider = ({ children }) => {
  const[state, dispatch] = useReducer(products_reducer, initialState)
  const[singleProduct, setSingleProduct] = useState({})
  
  const openSideBar = () => {
    dispatch({ type: SIDEBAR_OPEN})
  }

  const closeSidebar = () => {
    dispatch({ type: SIDEBAR_CLOSE})
  }

  // First to determine where we want to fetch the products home & products pages
  const fetchProducts = async(url) => {
     dispatch({type: GET_PRODUCTS_BEGIN})
     try{
      const response = await fetch(url)
      const products = await response.json()
      dispatch({type: GET_PRODUCTS_SUCCESS, payload: products})     
      console.log(products)
     } catch (error) {
        dispatch({type: GET_PRODUCTS_ERROR})   
        console.log(error)
     } 
  }


  const fetchSingleProduct = async(url) => {
    dispatch({ type: GET_SINGLE_PRODUCT_BEGIN })
    try {
      const response = await axios.get(url)
      const singleProduct = response.data
      dispatch({ type: GET_SINGLE_PRODUCT_SUCCESS, payload: singleProduct })
      setSingleProduct(singleProduct)
    } catch (error) {
      dispatch({ type: GET_SINGLE_PRODUCT_ERROR })
    }
  }

  useEffect(() => {
    fetchProducts(url)
  },[])

  return (
    <ProductsContext.Provider value={{
      ...state,
      singleProduct,
      openSideBar,
      closeSidebar,
      fetchSingleProduct,
    }}>
      {children}
    </ProductsContext.Provider>
  )
}
// make sure use
export const useProductsContext = () => {
  return useContext(ProductsContext)
}
