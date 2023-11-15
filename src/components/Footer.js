import React from 'react'
import {Stack, Box, Link, Typography} from '@mui/material'
import {BsEnvelopeAt} from 'react-icons/bs'
import {IoLocationOutline} from 'react-icons/io5'
import {AiOutlinePhone} from 'react-icons/ai'
import Logo from './Logo'
import {BiLogoInstagram} from 'react-icons/bi'
import {GrFacebook} from 'react-icons/gr'
import {BsTwitter} from 'react-icons/bs'
import {FaTiktok} from 'react-icons/fa'

const Footer = () => {
  return(
    <Stack sx={{width:'100%', height:{sx:'600px', sm:'300px'}, backgroundColor:'#363542', color:'white'}}>
       <Box p={1} sx={{
          display:'flex', justifyContent:'space-between', alignItems:'center', flexDirection:{xs:'column', sm:'row'}, color:'white',
          margin:{xs:'5px', sm:'10px'}
        }}>
       <Box sx={{display:'flex', flexDirection:'column', width:{sm:'100%', lg:'33%'}, marginY:{xs:'15px', sm:'0'} }}>
         <Logo />
         <Link color='inherit' underline="hover" >HOME</Link>
         <Link color='inherit' underline="hover" >PRODDUCTS</Link>
         <Link color='inherit' underline="hover" >ABOUT</Link>
         <Link color='inherit' underline="hover" >PORTFOLIO</Link> 
       </Box>
        
       <Box component='div' sx={{display:'flex', flexDirection:'column', width:{sm:'100%', lg:'33%'}}}>
        <Typography sx={{color:'white', marginBottom:'5px'}}>Contact Us</Typography>
         <Box component='span'><BsEnvelopeAt/> ahmedamrgad12345@gmail.com</Box>
         <Box component='span'><IoLocationOutline/> Helioplis, Cairo, Egypt</Box> 
         <Box component='span'> <AiOutlinePhone/>+201009860198</Box>
       </Box>  

       <Box sx={{display:'flex', flexDirection:'column', width:{sm:'100%', lg:'33%'}, marginY:{xs:'15px', sm:'0'}}}>
         <Typography variant='body1' sx={{width:{xs:'100%', sm:'80%'}, color:'white'}}>
            This some important things to know aboyut my furntiure company now we will talk about all the features 
         </Typography>
         <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', width:'50%', marginTop:'5px'}}>
            <GrFacebook/>
            <BiLogoInstagram/>
            <BsTwitter/>
            <FaTiktok/>
         </Box>
       </Box>
      </Box>
      <Box sx={{display:'flex', flexDirection:'column', margin:{xs:'0', sm:'15px'}, padding:'5px'}}>
       <Typography variant='subtitle1' color='white'> Woods &copy; {new Date().getFullYear()} all rights reserved</Typography>
       <Typography variant='subtitle1' color='white'> Designed and developed by ahmedGad_Dev</Typography>
      </Box>
    </Stack>
  )
}



export default Footer
