import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const PageHero = ({title, product}) => {
  return(
    <Wrapper>
      <div className='section-center'>
        <h3>{title}</h3>
        <h4>
          <Link to='/'>Home</Link>  {product && <Link to='/products'>  Products </Link> }  {'>'} <span className='active-span'>{title}</span>
        </h4>        
      </div>    
    </Wrapper>
  )
}

const Wrapper = styled.section`
  background: #f4f4f4;
  width: 100%;
  min-height: 17vh;
  display: flex;
  align-items: center;
  margin-top:20px;
  color: #363542;

  h3{
    font-weight:bold;
    margin-left:7px;
  }

  a {
    color: #363542;
    padding: 0.5rem;
    transition: var(--transition);
  }
  a:hover {
    color: #d32f2f;
  }

  .active-span{
    color:grey
  }
`

export default PageHero
