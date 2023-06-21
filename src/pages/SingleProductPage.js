import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useProductsContext } from '../context/products_context'
import { single_product_url as url } from '../utils/constants'
import { formatPrice } from '../utils/helpers'
import Stars from '../components/Stars'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import PageHero from '../components/PageHero'
import Loading from '../components/Loading'
import Error from '../components/Error'
import ProductImages from '../components/ProductImages'
import AddToCart from '../components/AddToCart'

const SingleProductPage = () => {
  const {id} = useParams()

  const {
       single_product_loading:loading,
       single_product_error:error,
       single_product: product,
       fetchSingleProduct, singleProduct} = useProductsContext()


       useEffect(() => {
        fetchSingleProduct(`${url}${id}`)
        // eslint-disable-next-line
      }, [id])
    

  console.log(product)

  if(loading){
    return <Loading/>
  }

  if(error){
    return <Error/>
  }

  const {
    name,
    price,
    description,
    stock,
    stars,
    reviews,
    id: sku,
    company,
    images,
 } = singleProduct

  return(
    <Wrapper className='section-center'>
       <PageHero title={name} product  />
      { /*<h2>The params are {id}</h2> */}
       <div className='section section-center page'>
         <Link to='/products' className='btn'>
           back to products
         </Link>
        <div className=' product-center'>
          <ProductImages images={images} />
          <section className='content'>
            <h2>{name}</h2>
            <Stars stars={stars} reviews={reviews} />
            <h5 className='price'> {formatPrice(price)}</h5>
            <p className='desc'> {description}</p>
            <p className='info'>
              <span>Available : </span>
              {stock > 0 ? 'In stock' : 'out of stock'}
            </p>
            <p className='info'>
              <span>SKU : </span>
              {sku}
            </p>
            <p className='info'>
              <span>Brand : </span>
              {company}
            </p>
            <hr />
            {stock > 0 && <AddToCart product={singleProduct} /> }
          </section>
        </div>
      </div>    
    </Wrapper>
  )
}

const Wrapper = styled.main`
  .product-center {
    display: grid;
    gap: 4rem;
    margin-top: 2rem;
  }
  .price {
    color: var(--clr-primary-5);
  }
  .desc {
    line-height: 2;
    max-width: 45em;
  }
  .info {
    text-transform: capitalize;
    width: 300px;
    display: grid;
    grid-template-columns: 125px 1fr;
    span {
      font-weight: 700;
    }
  }

  @media (min-width: 992px) {
    .product-center {
      grid-template-columns: 1fr 1fr;
      align-items: center;
    }
    .price {
      font-size: 1.25rem;
    }
  }
`

export default SingleProductPage

