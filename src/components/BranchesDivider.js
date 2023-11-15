import React from 'react'
import { Paper, Box,Typography, Stack} from '@mui/material'
import bgImg from '../assets/img/branches-4.jpg'
import { GiDiamondHard } from "react-icons/gi";
import { HiOutlineHomeModern } from "react-icons/hi2";
import { BsFillAwardFill } from "react-icons/bs";

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
        marginY:'60px'
    }
};

const BranchesDivider = () => {
  return (
    <Paper style={styles.paperContainer}>
        <Stack
          sx={{display:'flex', flexDirection:{lg:'row'}, justifyContent:{sx:'center', md:'space-between'}, alignContent:'center', alignItems:'center', backgroundColor:'rgba(0,0,0,0.5)', padding:'15px'}}>
            <Box sx={{display:'flex',justifySelf:'flex-start', flexDirection:'column', marginRight:{xs:'0', md:'80px'}, padding:'20px'}}>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around', letterSpacing:'1px'}}>
                  <Typography variant="h5" sx={{color:'white', marginRight:'15px', marginBottom:'10px'}}> Awards Winner </Typography>
                  <BsFillAwardFill style={{width:'35px', height:'35px', color:'white'}} />               
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                  <Typography variant="h5" sx={{color:'white', marginRight:'15px', marginBottom:'10px', letterSpacing:'1px'}}> Luxury Furniture</Typography>
                  <GiDiamondHard style={{width:'35px', height:'35px', color:'white'}} />               
                </Box>
                <Box sx={{display:'flex', flexDirection:'row', justifyContent:'space-around'}}>
                  <Typography variant="h5" sx={{color:'white', marginRight:'15px', marginBottom:'10px', letterSpacing:'1px'}}> Modern & style </Typography>
                  <HiOutlineHomeModern style={{width:'35px', height:'35px', color:'white'}} />               
                </Box>
            </Box>
            <Box><Typography sx={{ padding:{xs:'2px', sm:'8px', lg:'15px'}, fontSize:{xs:'1.5rem', sm:'2.25rem', xl:'3.75rem'}, color:'white', textTransform:'uppercase'}}>Visit Our Branches</Typography></Box>      
        </Stack>
    </Paper>
  )
}

export default BranchesDivider