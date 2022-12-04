import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Typography } from '@mui/material';

function MuiToggleButton() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <div data-aos="fade-up">
      <Typography variant="h4">Toggle Button</Typography>
    </div>
  )
}

export default MuiToggleButton;