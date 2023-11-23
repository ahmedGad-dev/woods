import React from 'react'
import { Divider, Paper, Box, Button, Typography, Stack} from '@mui/material'
import bgImg from '../assets/separator.webp'

const styles = {
    paperContainer: {
        backgroundImage: `url(${bgImg})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:'full', 
        height:{xs:'250px', md:'185px'},
        display:'flex',
        padding:'20px',
        justifyContent:'space-around',
        marginTop:'60px'
    }
};

function Separator() {
  return (
    <Paper style={styles.paperContainer}>
        <Stack
          sx={{display:'flex', flexDirection:{lg:'row'}, justifyContent:{sx:'center', md:'space-around'}, alignContent:'center', alignItems:'center'}}        
          divider={<Divider orientation='vertical' flexItem/> }>
            <Box sx={{justifySelf:'flex-start'}}><Typography variant='h4' sx={{border:'2px solid black', padding:'10px', margin:'15px', marginRight:{lg:'50px'}, fontSize:{xs:'1rem', sm:'1.5rem', lg:'2rem',}}}>See The Elegant Taste</Typography></Box>
            <Box><Typography sx={{ padding:{xs:'2px', sm:'8px', lg:'15px'},  fontSize:{xs:'1.5rem', sm:'2.25rem', xl:'3.75rem'}}}>More Than 10% Discount</Typography></Box>      
            <Box><Button variant="contained" color="error" sx={{height:{xs:'40px', lg:'60px'}, margin:'15px', borderRadius:'10px', marginLeft:{lg:'50px'}, fontSize:{xs:'14px', sm:'16pxm', xl:'24px'}}}>Shop Now</Button></Box>
        </Stack>
    </Paper>
  )
}

export default Separator