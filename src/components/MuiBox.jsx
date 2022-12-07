import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Box,
  Typography
} from "@mui/material";

function MuiBox() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Box data-aos="fade-up">
      <Typography variant="h4">Box/Layout</Typography>
    </Box>
  )
}

export default MuiBox;