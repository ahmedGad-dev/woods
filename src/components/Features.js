import React from 'react'
import {Box,Stack,Paper} from '@mui/material'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { featuresData } from '../utils/constants';


const Features = () => {
  return (
    <Paper>
      <Stack>
        {/* 3 cols features */}
        <Box sx={{display:'flex',flexDirection:{xs:'column',md:'row'}, justifyContent:'space-around', padding:{xs:'10px', md:'40px'} , marginBottom:{xs:'0px', md:'10px'}}}>
           {
            featuresData.filter((_, index) => index < 3).map((item)=>(
              <Card sx={{
                  width:{xs:'auto' , md:250},       
                  maxWidth: {xs:'auto' , md:350},
                  boxShadow:'none',
                  display:'flex',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center',
                  padding:'30px',
                }}>
                  {item.icon}         
              <CardContent 
                 sx={{
                  padding:'0',
                  marginY:'5px',
                  display:'flex',
                  textAlign:'center',
                  flexDirection:'column',
                  justifyContent:'center',
                  alignItems:'center'
                  }}>
                <Typography gutterBottom variant="subtitle2" component="div" sx={{fontWeight:'bold'}}>
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {item.description}
                </Typography>
                <CardActions>
                 <Button variant='outlined' sx={{color:'black',border:'none', }} size="small">Learn More</Button>
                </CardActions>
              </CardContent>
             </Card>
            ))     
           } 
        {/* 3 cols features */}
        </Box>
        {/* 4 cols features */}
        <Box sx={{
          display:'flex',
          justifyContent:'space-around',
          flexDirection:{xs:'column',md:'row'},
          margin:'20px',
          marginTop:{xs:0, md:'20px'},
          padding:'20px', 
          backgroundColor:'#f4f4f4',
          }}>
          {
            featuresData.filter((_, index) => index > 2).map(((item,index)=>(
              <Card sx={{
                width:{xs:'auto'},       
                maxWidth: {xs:'auto'},
                boxShadow:'none',
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                backgroundColor:'transparent',
                padding:{xs:'10px', md:'30px'},
                borderRadius:'0',
                borderTop: {xs:`${index === 0? 'none' :'2px solid #363542'}`, md:'none'},
                borderRight:{xs:'none',md:`${index === 3? 'none' :'2px solid #363542'}`}
              }}>
                {item.icon}         
             <CardContent 
               sx={{
                padding:'0',
                marginY:{xs:'5px', md:'30px'},
                display:'flex',
                flexDirection:'column',
                justifyContent:'center',
                alignItems:'center',
                textAlign:'center'
                }}>
               <Typography gutterBottom variant="subtitle2" component="div" sx={{fontWeight:'bold'}}>
                {item.title}
               </Typography>
              <Typography variant="body2" color="text.secondary">
                 {item.description}
              </Typography>
              <CardActions>
                <Button variant='outlined' sx={{color:'black',border:'none', }} size="small">Learn More</Button>
              </CardActions>
             </CardContent>
           </Card>
            )))
          }
        </Box>
      {/* 4 cols features */}
      </Stack>
    </Paper>
  )
}

export default Features

