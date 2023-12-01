import React, {useRef} from 'react'
import { Box, Stack, Paper } from '@mui/material'
import branches1 from '../assets/img/branches-1.webp'
import branches2 from '../assets/img/branches-2.webp'
import branches3 from '../assets/img/branches-5.webp'
import branches4 from '../assets/img/branches-7.webp'
import branches5 from '../assets/img/branches-6.webp'
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {BsArrowRight, BsArrowLeft} from 'react-icons/bs'

const containerStyles = {
   minWidth: '30%',
   height: '240px',
   width:'240px',
   display: 'flex',
   flexWrap:'wrap',
   alignItems: 'center',
   justifyContent: 'center',
   border: '1px solid black',
   overflow: 'hidden',
   backgroundPosition:'center',
   backgroundSize:'cover',
   marginRight:'20px',
   '&:hover':{
      cursor: 'pointer',
      transform: 'scale(1.1)',
      transition: 'transform 6s cubic-bezier(0.25, 0.45, 0.45, 0.95)'
     }
}

const boxStyles = {
  height: '90px',
  padding: '0 25px',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  border: '1px solid black',
  backgroundColor: 'white',
  opacity: 0.7,
  textTransform:'uppercase',
  letterSpacing:'1px',
  fontSize:'18px',
}

const cardsData = [
   {
      id:1,
      background:branches1,
      location:'Heliopolis'  
   },
   {
      id:2,
      background:branches2,
      location:'Maadi' 
   },
   {
      id:3,
      background:branches3,
      location:'6th October' 
   },
   {
      id:4,
      background:branches4,
      location:'5th Settlement' 
   },
   {
      id:5,
      background:branches5,
      location:'Moqatam' 
   }
]

const Branches = () => {
   const slider = useRef(null);
   const settings = {  
       className: "slider variable-width center",
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
          vertical: true,
          verticalSwiping: false,
          slidesToShow: 1,
         }
       }
      ]
    };
  return (
   <Paper sx={{marginY:{xs:'40px',xl:'65px'}, boxShadow:'none'}}>
     <Slider ref={slider} {...settings}>
        {cardsData.map(card => (
          <Box key={card.id} sx={{...containerStyles, backgroundImage: `url(${card.background})`}}>     
             <Box sx={{...boxStyles, }}> {card.location} </Box>         
          </Box>
        ))}
     </Slider>
      <Stack sx={{position:'relative'}}>
        <Box sx={{position:'absolute', bottom:'100px',cursor:'pointer', backgroundColor:'rgba(0,0,0,1)', borderRadius:'20px', padding:'6px', margin:'5px'}}
         onClick={() => {
           slider?.current?.slickPrev()
         }}>
          <BsArrowLeft style={{ width:'30px', height:'30px', fill:'white' }}/>
        </Box>
        <Box sx={{position:'absolute', right:'0', bottom:'100px', cursor:'pointer', backgroundColor:'rgba(0,0,0,1)', borderRadius:'20px', padding:'6px', margin:'5px'}}
         onClick={() => {
            slider?.current?.slickNext()
          }}>
          <BsArrowRight style={{height:'30px', width:'30px', fill:'white'}}/>
        </Box> 
       </Stack>   
   </Paper>
  )
}

export default Branches

/* <Stack sx={{ display:'flex', flexDirection:'row',marginY:'30px', padding:'10px'}}>
       <Box sx={{...containerStyles, backgroundImage: `url(${branches1})`}}>     
         <Box sx={{...boxStyles, }}> Heliopolis </Box>         
      </Box>
      <Box sx={{...containerStyles, backgroundImage: `url(${branches2})`}}>
         <Box sx={{...boxStyles}}> Maadi </Box>               
      </Box>
      <Box  sx={{...containerStyles, backgroundImage: `url(${branches3})`}}>
         <Box sx={{...boxStyles}}> 
            looooo
         </Box>          
      </Box>
      <Box sx={{...containerStyles, backgroundImage: `url(${branches4})`}}>
         <Box sx={{...boxStyles}}> 
            looooo
         </Box>          
      </Box>
      <Box sx={{...containerStyles,  backgroundImage: `url(${branches5})`}}>
         <Box sx={{...boxStyles}}> 
            looooo
         </Box>          
      </Box>
  </Stack>*/