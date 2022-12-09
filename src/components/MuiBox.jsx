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

      {/* span tag */}
      <Box component="span" 
        sx={{
          backgroundColor: "primary.main",
          color: "white",
          height:"250px",
          width:  "250px",
          padding: '16px',
          '&:hover':{
            backgroundColor: "primay.info"
          },
        }}
      >
        Mister
      </Box>

      <Box p={5} bgcolor="success.light" displa="flex" height="100px" width="100px">
        wefwefewef
      </Box>

    </Box>
  )
}

export default MuiBox;