import React from 'react'
import styled from 'styled-components'
import  PageHero  from '../components/PageHero'
import aboutImg from '../assets/img/branches-5.webp'
import {BiLogoInstagram} from 'react-icons/bi'
import {GrFacebook} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'

const AboutPage = () => {
  return(
     <main>
      <PageHero title='about'/>
       <Wrapper className='page section section-center'> 
         <img  src={aboutImg}  alt='AhmedGad-Dev' />
         <article>
           <div className='title'>
             <h2> Woods </h2>          
           </div>  
           <p>        
             Lorem ipsum dolor sit amet consectetur adipisicing elit.
             Laudantium dicta quasi dolor iusto. Iusto voluptas corporis excepturi beatae. Aspernatur, excepturi!
             Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
             Commodi minus tempore aliquam quod libero hic possimus iure distinctio qui maiores? 
             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tempore earum ipsa sit sequi placeat rerum expedita aspernatur harum nisi facilis.
             Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex dolorum rem incidunt hic quae quis laboriosam, libero quo alias. Tempora reprehenderit dolores ratione nesciunt non nisi quod odio libero vel!
           </p>   
           <div style={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'50%', marginTop:'15px'}}>   
             <GrFacebook/>
             <BiLogoInstagram/>
             <BsTwitter/>
             <FaTiktok/>
           </div>
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
