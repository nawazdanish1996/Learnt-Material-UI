import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Rating,
} from "@mui/material";
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function MuiRating() {
  const [rat, setRat] = useState(null);
  console.log(rat);

  const handlerRating = (e) =>{
    setRat(e.target.value);
  }
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack spacing={2} data-aos="fade-up" style={{border: "1px solid red"}}>
      <Typography variant='h4'>Rating {rat}</Typography>
      <Stack>
        <Rating 
        size="medium" 
        precision={0.5} 
        onClick={handlerRating} 
        checked={rat} 
        value={rat} />
      </Stack>
      <Stack>
        <Rating 
        icon={<FavoriteIcon size="inherit" color="error" />} 
        emptyIcon={<FavoriteBorderIcon size="inherit" />}
        precision={0.5} 
        onClick={handlerRating} 
        checked={rat} 
        value={rat}
        highlightSelectedOnly
        />
      </Stack>
    </Stack>
  )
}

export default MuiRating;