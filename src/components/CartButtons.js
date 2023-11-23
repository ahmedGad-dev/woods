import React from 'react'
import { FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { useProductsContext } from '../context/products_context'
import { useCartContext } from '../context/cart_context'
//import { useUserContext } from '../context/user_context'
import {BsCartXFill} from 'react-icons/bs'

const CartButtons = () => {
  const {closeSidebar} = useProductsContext()
  const {total_items} = useCartContext()
  return(
    <Wrapper className='cart-btn-wrapper'>
      <Link to='cart' className='cart-btn'>
        <span className='cart-container'> 
         {total_items > 0? <FaShoppingCart/> :<BsCartXFill/>}
          <span className='cart-value'>{total_items}</span>
        </span>
      </Link>
     { /*<button type='button' className='auth-btn'>
        login <FaUserPlus/>
  </button>*/}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  margin-left: 15px;

  .cart-btn {
    color: var(--clr-grey-3);
    font-size: 1.5rem;
    letter-spacing: var(--spacing);
    display: flex;
    link-style-type: none;
    align-items: center;
  }
  .cart-container {
    display: flex;
    align-items: center;
    position: relative;
    svg {
      height: 1.6rem;
      margin-left: 5px;
    }
  }
  .cart-value {
    position: absolute;
    top: -10px;
    right: -16px;
    background: 'black';
    width: 16px;
    height: 16px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 50%;
    font-size: 1rem;
    color: rgba(0, 0, 0, 0.54);
    padding: 12px;
  }
  .auth-btn {
    display: flex;
    align-items: center;
    background: transparent;
    border-color: transparent;
    font-size: 1.5rem;
    cursor: pointer;
    color: var(--clr-grey-1);
    letter-spacing: var(--spacing);
    svg {
      margin-left: 5px;
    }
  }
`
export default CartButtons
