import React, {useRef} from 'react'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {Typography, Card, Stack, Box,Paper} from "@mui/material"
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import {Link}from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'
import {useProductsContext} from '../context/products_context'
import Loading from '../components/Loading'

const Carausel = () => {
    const slider = useRef(null);
    const {featured_products:products,products_loading:loading} = useProductsContext()

    const settings = {  
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: false,
        initialSlide:1,
        autoPlay:true,
        autoplaySpeed: 3000,
        dots: false,
        centerMode: false,
        vertical: false,
        responsive:[
          {
           breakpoint: 1300,
           settings:{
            slidesToShow: 2,
          }, 
        },
        {
          breakpoint: 800,
          settings: {
           slidesToShow: 1,
          }
        }
       ]
     };

    if(loading){
      return <Loading />
     }

  return(
    <Paper sx={{marginY:{xs:'25px',xl:'35px'}, boxShadow:'none', }}>
      <Slider ref={slider} {...settings}>       
           {
            products.map(product =>(
             <Card sx={{width:{xs:'400px', lg:'400px'}, minWidth:'400px', maxWidth:{xs:'600px', sm:'800px', xl:'500px'}, padding:'10px', borderRadius:'25px'}}>
              <CardHeader
               title={product.name.toUpperCase()}
               subheader={product.category.toUpperCase()}
              />
             {<CardMedia
               component="img"
               height="300"
               width='100%'
               image={product.image}
               alt={product.name}
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
             <CardActions disableSpacing sx={{display:'flex', justifyContent:'space-between'}}>
              <Box>
               <IconButton aria-label="add to favorites" sx={{color:'#d32f2f'}} title='Add to favourites'>
                 <FavoriteIcon />
               </IconButton>
               <IconButton aria-label="share" title='Share'>
                 <ShareIcon />
               </IconButton>
              </Box>
              <Box>
               <Link to={`${product.id}`} className='btn' style={{marginRight:'5px'}}>See Product</Link>
              </Box>
             </CardActions>        
          </Card>
         ))
        }        
     </Slider> 
       <Stack sx={{position:'relative'}}>
        <Box sx={{position:'absolute', bottom:'250px',cursor:'pointer', backgroundColor:'white', borderRadius:'20px', padding:'6px', margin:'5px'}}
         onClick={() => {
           slider?.current?.slickPrev()
         }}>
          <BsArrowLeft style={{ width:'30px', height:'30px', }}/>
        </Box>
        <Box sx={{position:'absolute', right:'0', bottom:'250px', cursor:'pointer', backgroundColor:'white', borderRadius:'20px', padding:'6px', margin:'5px'}}
         onClick={() => {
            slider?.current?.slickNext()
          }}>
          <BsArrowRight style={{height:'30px', width:'30px'}}/>
        </Box> 
       </Stack>   
    </Paper>   
  )
}

export default Carausel