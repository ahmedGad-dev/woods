import React from 'react'
import styled from 'styled-components'
import { FaTimes } from 'react-icons/fa'
import {useNavigate} from 'react-router-dom'
import { useCartContext } from '../context/cart_context'
import bg from '../assets/img/chair-3.webp'

const Modal = () => {
  const {closeModal, modalOpen} = useCartContext()
  const navigate = useNavigate()

  return(
    <Wrapper>
     <div className={`${modalOpen?  'modal-overlay show-modal' :  'modal-overlay'}`} imgUrl='../assets/img/chair-2.webp'>
      <div className='modal-container' >
        <h3>See our great collections and massive  <span className='shop-page-link'>discounts %</span> </h3>
        <button className='close-modal-btn' onClick={closeModal}>
          <FaTimes></FaTimes>
        </button>
      </div>
     </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
$clr-white: #fff; 
$clr-black: #222;
$transition: all 0.3s linear;
$radius: 0.25rem;
$fixed-width: 620px;
$clr-red-dark: hsl(360, 67%, 44%);

.modal-overlay {
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100%;
   background: rgba(0, 0, 0, 0.5);
   display: grid;
   place-items: center;
   transition: $transition;
   visibility: hidden;
   z-index: -1;
 }
 /* OPEN/CLOSE MODAL */
 .show-modal {
   visibility: visible;
   z-index: 10;
 }
 .modal-container {
   background:url(${bg});  
   border-radius: $radius;
   background-size:cover;
   background-position:center;
   width: 70vw;
   color:black;
   height: 25vh;
   max-width: $fixed-width;
   text-align: center;
   display: grid;
   place-items: center;
   position: relative;
   
 .shop-page-link{
   color: rgb(211, 47, 47);
   font-size: 32px;
   text-align: center;
   text-decoration:underline;
   background-color:white;
   padding:5px;
   @media(max-width:1000px){
    font-size:24px;
    margin-top:20px;
    padding:1px;
   }
 }

 .icon{
   font-size: 38px;
  }
 }

 .close-modal-btn {
   position: absolute;
   top: 1rem;
   right: 1rem;
   font-size: 2rem;
   background: transparent;
   border-color: transparent;
   color: $clr-red-dark;
   cursor: pointer;
 }

`

export default Modal
