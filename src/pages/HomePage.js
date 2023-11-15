import React from 'react'
import styled from 'styled-components'
import ProductsPage from '../components/Products'
import Carausel from '../materialUI/Carausel'
import Separator from '../components/Separator'
import Features from '../components/Features'
import Branches from '../components/Branches'
import BranchesDivider from '../components/BranchesDivider'

const HomePage = () => {
  return(
     <main>
       <Carausel/>
       <Separator/>
       <ProductsPage/>  
       <Features/> 
       <BranchesDivider/>
       <Branches/>    
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
