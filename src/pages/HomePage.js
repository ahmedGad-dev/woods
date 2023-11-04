import React from 'react'
//import Hero from '../components/Hero'
import FeaturedProducts from '../components/FeaturedProducts'
import styled from 'styled-components'
import Contact from '../components/Contact'
import Services from '../components/Services'
import ProductsPage from '../components/Products'
import Carausel from '../materialUI/Carausel'

const HomePage = () => {
  return(
     <main>
       <Carausel/>
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
