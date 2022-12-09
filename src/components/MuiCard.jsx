import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Box,
  Card,
  CardContent,
  CardActions,
  Button,
  CardMedia,
  Rating,
} from "@mui/material";

function MuiCard() {
  const [rat, setRat] = useState(null);
  console.log(rat);

  const handlerRating = (e) =>{
    setRat(e.target.value);
  }
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Card</Typography>

      <Box width="300px">
        <Card>
          <CardMedia 
            component="img" 
            height="140px"
            image="https://source.unsplash.com/random"
            alt="Tere Naam"
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div" color="primary.light">Nawaz Danish</Typography>
            <Typography variant="body2" color="text.secondary">Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nobis velit necessitatibus ab ut neque incidunt! Officiis quia eius autem accusantium sunt minus, illo vel.</Typography>
            <Rating 
              size="medium" 
              precision={0.5} 
              onClick={handlerRating} 
              checked={rat} 
              value={rat}
              />
          </CardContent>
          <CardActions>
            <Button size="small">Share</Button>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </Box>
    </Stack>
  )
}

export default MuiCard;