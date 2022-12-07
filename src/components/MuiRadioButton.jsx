import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Box,
  FormControl, 
  FormLabel, 
  FormControlLabel, 
  RadioGroup, 
  Radio,
  FormHelperText} from "@mui/material";

function MuiRadioButton() {
  const [val, setVal] = useState("");
  console.log(val);

  const handleChange = (e) =>{
    setVal(e.target.value);
  }

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])
    
  return (
    <div data-aos="fade-up">
      <Box>
        <FormControl>

          <FormLabel id='exp'>
            Year of Experiance
          </FormLabel>

          <RadioGroup row onChange={handleChange} value={val} name='exp' aria-labelledby='exp'>
            <FormControlLabel control={<Radio size='small' color='info' />} label='0-2' value='0-2' />
            <FormControlLabel control={<Radio size='medium' color='secondary' />} label='3-5' value='3-5' />
            <FormControlLabel control={<Radio size='large' color='error' />} label='6-10' value='6-10' />
          </RadioGroup>
          <FormHelperText>Invalid Selection</FormHelperText>

        </FormControl>
      </Box>
    </div>
  )
}

export default MuiRadioButton;