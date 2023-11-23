import React, { useEffect } from 'react'
import styled from 'styled-components'
import Filters from '../components/Filters'
import ProductList from '../components/ProductList'
import Sort from '../components/Sort'
import PageHero from '../components/PageHero'
import { useCartContext } from '../context/cart_context'
import Modal from '../components/Modal'

const ProductsPage = () => { 
  const {setModalOpen, modalOpen} = useCartContext()
  
  useEffect(() => {
    setTimeout(() => {
      setModalOpen(true)
    }, 10000)
  },[])

  return(
      <main>
        <PageHero title='products'/>
        <Wrapper className='page'>
          <div className="section-center products">
            <Filters/>
            <div>
              <Sort/>
              <ProductList/>
            </div>
          </div>         
        </Wrapper>
      { modalOpen ? <Modal/> : null}
      </main>   
  )
}

const Wrapper = styled.div`
  .products {
    display: grid;
    gap: 3rem 1.5rem;
    margin: 4rem auto;
  }
  @media (min-width: 768px) {
    .products {
      grid-template-columns: 200px 1fr;
    }
  }
`

export default ProductsPage
