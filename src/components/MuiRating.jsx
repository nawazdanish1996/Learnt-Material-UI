import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Rating,
} from "@mui/material";

function MuiRating() {
  const [rat, setRat] = useState(false);
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
        <Rating onClick={handlerRating} checked={rat} value={rat} />
      </Stack>
    </Stack>
  )
}

export default MuiRating;