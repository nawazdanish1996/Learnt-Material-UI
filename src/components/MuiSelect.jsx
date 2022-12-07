import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Box, TextField, MenuItem, Typography} from "@mui/material";

function MuiSelect() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <div data-aos="fade-up">
      <Box width="250px" fullWidth>
        <Typography>Select Country</Typography>
        <TextField label='Select Country' select error>
          <MenuItem value="IN">India</MenuItem>
          <MenuItem value="BN">Bangladesh</MenuItem>
          <MenuItem value="MY">Mayanmar</MenuItem>
          <MenuItem value="IN">India</MenuItem>
        </TextField>
      </Box>
    </div>
  )
}

export default MuiSelect;