import React from 'react'
import {Stack, Box, Link, Typography} from '@mui/material'



const Footer = () => {
  return(
    <Stack>
       <Box p={1} m={2} direction='row' sx={{
          display:'flex', justifyContent:'space-between', backgroundColor:'#363542', color:'white'
        }}>
       <Box sx={{display:'flex', flexDirection:'column'}}>
         <Link color='inherit' underline="hover" >HOME</Link>
         <Link color='inherit' underline="hover" >PRODDUCTS</Link>
         <Link color='inherit' underline="hover" >ABOUT</Link>
         <Link color='inherit' underline="hover" >PORTFOLIO</Link> 
       </Box>
        
       <Box component='div' sx={{display:'flex', flexDirection:'column'}}>
        <Typography sx={{color:'white'}}>See Our Products Categories</Typography>
        <Box component='span'>Hello</Box>
        <Box component='span'>MAMA</Box>
        <Box component='span'>HELLO</Box>
        <Box component='span'>MAMA</Box>      
       </Box>  
       <Box sx={{display:'flex', flexDirection:'column'}}></Box>
      </Box>
      <Typography variant='subtitle1'> Woods &copy; {new Date().getFullYear()} all rights reserved</Typography>
    </Stack>
  )
}



export default Footer
