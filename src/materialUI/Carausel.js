import React, {useRef} from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {IMAGE_DATA} from '../imgData';
import {Typography, Card, Stack, Box, Button} from "@mui/material"
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import {useProductsContext} from '../context/products_context'

const Carausel = () => {
  const slider = useRef(null);
  const {featured_products:products} = useProductsContext()

    const settings = {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1
      };
  return (
    <Box p={5}>
      <Slider ref={slider} {...settings} sx={{}}>       
           {
            products.map(product =>(
             <Card sx={{width:400 , maxWidth:400, margin:'40px'}}>
              <CardHeader
               title={product.name}
               subheader={product.category.toUpperCase()}
              />
             {<CardMedia
               component="img"
               height="300"
               image={product.image}
               alt="Paella dish"
               sx={{
               backgroundPosition:'center',
               backgroundSize:'cover'
               }}
             />}           
             <CardContent>
               <Typography variant="body2" color="text.secondary">
                  {product.description.substr(0,150)}
               </Typography>
             </CardContent>
             <CardActions disableSpacing>
               <IconButton aria-label="add to favorites" sx={{color:'#d32f2f'}} title='Add to favourites'>
                 <FavoriteIcon />
               </IconButton>
               <IconButton aria-label="share" title='Share'>
                 <ShareIcon />
               </IconButton>
             </CardActions>        
          </Card>
         ))
        }        
     </Slider>
       <Box sx={{position:'absolute', left:'20px', bottom:'150px', cursor:'pointer'}} onClick={() => slider?.current?.slickPrev()}><BsArrowLeft style={{ width:'30px', height:'30px', }}/></Box>
       <Box sx={{position:'absolute', right:'20px', bottom:'150px', cursor:'pointer'}} onClick={() => slider?.current?.slickNext()}><BsArrowRight style={{height:'30px', width:'30px'}}/></Box>
    </Box>   
  )
}

export default Carausel