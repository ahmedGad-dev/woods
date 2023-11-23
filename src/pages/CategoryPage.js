import React, { useEffect, useState} from 'react'
import { Paper, Stack, Box, Typography, Grid } from '@mui/material'
import { useParams } from 'react-router-dom'
import {useProductsContext} from '../context/products_context'
import Product from '../components/Product'
import PageHero from '../components/PageHero'
import Loading from '../components/Loading'

const CategoryPage = () => {
    let {category} = useParams()
    const {products:all_products,products_loading:loading} = useProductsContext()
    const [productCategory, setProductCategory] = useState([])
    let unique
   
    useEffect(() => {
     unique = all_products.filter(product => product.category === category )
     setProductCategory(unique)
   },[unique, category])

   if(loading){
    return <Loading />
   }

  return(
    <Paper>
      <PageHero title={category} product/>
      <Stack my={1} p={6}>
       <Typography variant='h4'>  {category.toUpperCase()} </Typography>  
       <Grid container rowSpacing={6} columnSpacing={2} p={3}>      
         {
          productCategory.map(product => (
            <Grid item xs={12} sm={6} lg={3}>
             <Box sx={{maxHeight:'200px'}}>
               <Product key={product.id} {...product} productsPage />
             </Box>
            </Grid>
          ))
         }    
        </Grid>   
       </Stack>    
    </Paper>
  )
}

export default CategoryPage