import React, { useEffect, useContext, useReducer, useState } from 'react'
import cart_reducer from '../reducers/cart_reducer'
import {
  ADD_TO_CART,
  REMOVE_CART_ITEM,
  TOGGLE_CART_ITEM_AMOUNT,
  CLEAR_CART,
  COUNT_CART_TOTALS,
} from '../actions'

const getLocalStorage = () => {
  let cart = localStorage.getItem('cart')
  if(cart){
    return JSON.parse(localStorage.getItem('cart'))
  } else {
    return []
  }
}

const initialState = {
  cart: [],
  total_items: 0,
  total_amount:0,
  shipping_fee:534
}

const CartContext = React.createContext()

export const CartProvider = ({ children }) => {
  const[state, dispatch] = useReducer(cart_reducer, initialState)
  const[modalOpen, setModalOpen] = useState(false)

  const addToCart = (id, color, amount, product) => {
    dispatch({type: ADD_TO_CART, payload: {id, color, amount, product} })
  }

   // remove item
   const removeItem = (id) => {
    dispatch({ type: REMOVE_CART_ITEM, payload: id })
  }

  // toggle amount
  const toggleAmount = (itemId, value) => {
    dispatch({ type: TOGGLE_CART_ITEM_AMOUNT, payload: { itemId, value } })
  }

  // clear cart
  const clearCart = () => {
    dispatch({ type: CLEAR_CART })
  }

  useEffect(() => {
    dispatch({ type: COUNT_CART_TOTALS })
    localStorage.setItem('cart', JSON.stringify(state.cart))
  }, [state.cart])

  useEffect(() => {
    getLocalStorage()
  },[state.cart])

  const closeModal = () =>  setModalOpen(false)
   
  

  return (
    <CartContext.Provider value={{
      ...state,
      addToCart,
      toggleAmount,
      removeItem,
      clearCart, 
      closeModal,
      setModalOpen,
      modalOpen
    }}>
      {children}
    </CartContext.Provider>
  )
}
// make sure use
export const useCartContext = () => {
  return useContext(CartContext)
}
