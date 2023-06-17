import React from 'react'
import styled from 'styled-components'
import { services } from '../utils/constants'

const Services = () => {
  return(
    <Wrapper>
      <div className="section-center">
        <article className='header'>
           <h3>
             custom furniture <br/> Built especially for you
           </h3>
           <p className='para-text-big'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis voluptate excepturi ratione Lorem ipsum dolor sit,
              amet consectetur adipisicing elit. Delectus, vel!</p>                          
        </article>
      </div>
      <div className="services-center">
        {services.map(service =>{
          const { id, icon, title, text} = service
          return(
            <article key={id} className='service'>
                <span className='icon'>{icon}</span>
                <h4>{title}</h4>
                <p>{text}</p>
            </article>
          )
        })}
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  h3,
  h4 {
    color: var(--clr-primary-1);
    text-transform: capitalize;
  }

  .para-text-big{
    fonst-size: 3rem;
    text-transform: capitalize;
  }
  padding: 5rem 0;

  background: var(--clr-primary-10);

  .header h3 {
    margin-bottom: 2rem;
  }
  p {
    margin-bottom: 0;
    line-height: 1.8;
    color: var(--clr-primary-3);
  }

  .services-center { 
    transform: translateY(7rem);
    display: flex; 
    justify-content: space-around;
  }

  .service {
    background: var(--clr-primary-7);
    text-align: center;
    padding: 2.5rem 2rem;
    width:30%;
    border-radius: var(--radius);
    p {
      color: var(--clr-primary-2);
    }
    transition: all 2s;
  }
  .service:hover{
    transform:scale(110%)
  }
  span {
    width: 4rem;
    height: 4rem;
    display: grid;
    margin: 0 auto;
    place-items: center;
    margin-bottom: 1rem;
    border-radius: 50%;
    background: var(--clr-primary-10);
    color: var(--clr-primary-1);
    svg {
      font-size: 2rem;
    }
  }
  @media (min-width: 992px) {
    .header {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
  }
  @media (min-width: 576px) {
    .services-center {
      grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    }
  }
  @media (min-width: 1280px) {
    padding: 0;
    .section-center {
      transform: translateY(5rem);
    }
  }
`
export default Services
