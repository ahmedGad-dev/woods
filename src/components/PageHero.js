import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageHero = ({title, product}) => {
  return(
    <Wrapper>
      <div className='section-center'>
        <h3>
          <Link to='/'>Home</Link> {product && <Link to='/products'>  Products </Link> }  / {title}
        </h3>        
      </div>    
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #f4f4f4;
  width: 100%;
  min-height: 20vh;
  display: flex;
  align-items: center;
  margin-top:20px;

  color: #363542;
  a {
    color: #363542;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: #d32f2f;
  }
`

export default PageHero
