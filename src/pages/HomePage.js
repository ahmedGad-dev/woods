import React from 'react'
import styled from 'styled-components'
import ProductsPage from '../components/Products'
import Carausel from '../materialUI/Carausel'
import Separator from '../components/Separator'

const HomePage = () => {
  return(
     <main>
       <Carausel/>
       <Separator/>
       <ProductsPage/>       
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

export default HomePage
