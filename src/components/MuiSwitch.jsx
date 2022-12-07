import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Typography,
  Box,
  FormControlLabel,
  Switch
} from "@mui/material";
import "../css/MuiSwitch.css";

function MuiSwitch() {
  const [mode, setMode] = useState(false);
  console.log(mode);

  const clickHandler = (e) =>{
    setMode(e.target.checked);
  }

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])
    
  return (
    // use Box insted of div tag
    <Box data-aos="fade-up">
      <Typography variant='h4'>Switch</Typography>
      <FormControlLabel className={mode === true ? "night": "day"} label="Dark Mode" control={<Switch size="small" color='success' value={mode} onClick={clickHandler} />} />
    </Box>
  )
}

export default MuiSwitch;