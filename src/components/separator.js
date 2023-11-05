import React from 'react'
import { Divider, Paper, Box, Button, Typography, Stack} from '@mui/material'
import bgImg from '../assets/separator.webp'

const styles = {
    paperContainer: {
        backgroundImage: `url(${bgImg})`,
        backgroundPosition:'center',
        backgroundSize:'cover',
        width:'full', 
        height:'185px',
        display:'flex',
        justifyContent:'space-around'
    }
};

function Separator() {
  return (
    <Paper style={styles.paperContainer} >
        <Stack direction='row' spacing={6} 
        sx={{alignContent:'center', alignItems:'center'}} 
        divider={<Divider orientation='vertical' flexItem/> }>
            <Box><Typography variant='h4' sx={{border:'2px solid black', padding:'5px'}}>See The Elegant Taste</Typography></Box>
            <Box><Typography variant='h2' sx={{ padding:'15px'}}>more than 10% Discount</Typography></Box>      
            <Box><Button variant="contained" color="error" sx={{height:'60px', borderRadius:'10px', fontSize:'24px'}}>Shop Now</Button></Box>
        </Stack>
    </Paper>
  )
}

export default Separator