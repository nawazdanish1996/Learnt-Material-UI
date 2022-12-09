import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Typography,
  Paper,
} from "@mui/material";

function MuiPaper() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Paper elevation={4} data-aos="fade-up" sx={{padding: "32px"}}>
      <Typography variant='h4'>Paper</Typography>
      <Typography>write Paper instead of React.Fragment</Typography>

      <Paper>1</Paper>
    </Paper>
  )
}

export default MuiPaper;