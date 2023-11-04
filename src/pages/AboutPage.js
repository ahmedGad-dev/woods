import React from 'react'
import styled from 'styled-components'
//import { PageHero } from '../components'
import Logo from '../components/Logo'

const AboutPage = () => {
  return(
     <main>
      <Wrapper className='page section section-center'>
         <Logo/>
         <article>
           <div className='title'>
             <h2> Story </h2>
             <div className="underline"></div>           
           </div>  
           <p>        
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laudantium dicta quasi dolor iusto. Iusto voluptas corporis excepturi beatae. Aspernatur, excepturi!
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
             Commodi minus tempore aliquam quod libero hic possimus iure distinctio qui maiores? 
           </p>     
         </article>
      </Wrapper>
     </main>    
  )
}

const Wrapper = styled.section`
  display: grid;
  gap: 4rem;
  img {
    width: 100%;
    display: block;
    border-radius: var(--radius);
    height: 500px;
    object-fit: cover;
  }
  p {
    line-height: 2;
    max-width: 45em;
    margin: 0 auto;
    margin-top: 2rem;
    color: var(--clr-grey-5);
  }
  .title {
    text-align: left;
  }
  .underline {
    margin-left: 0;
  }
  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`
export default AboutPage
