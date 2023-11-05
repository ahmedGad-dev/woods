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
        <Box sx={{display:'flex', justifyContent:'space-around', margin:'20px', padding:'10px'}}>
           {
            featuresData.filter((_, index) => index < 3).map((item)=>(
              <Card sx={{ maxWidth: 345,boxShadow:'none'}}>
              <svg >{item.icon}</svg>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {item.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                   {item.description}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
             </Card>
            ))     
           } 
        {/* 3 cols features */}
        </Box>
        {/* 4 cols features */}
        <Box sx={{display:'flex', justifyContent:'space-around', margin:'20px', padding:'10px', backgroundColor:'var(--clr-grey-9)'}}>
        {
            featuresData.filter((_, index) => index > 2).map((item)=>(
             <Card sx={{ maxWidth: 345, boxShadow:'none',backgroundColor:'transparent' }}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="140"
                image="/static/images/cards/contemplative-reptile.jpg"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Lizard
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Lizards are a widespread group of squamate reptiles, with over 6,000
                  species, ranging across all continents except Antarctica
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small">Share</Button>
                <Button size="small">Learn More</Button>
              </CardActions>
             </Card>
            ))
        }
        </Box>
      {/* 4 cols features */}
      </Stack>
    </Paper>
  )
}

export default Features

