import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Autocomplete,
  TextField
} from "@mui/material";

function MuiAutoComplete() {
  const skills = ['HTML', 'CSS', 'JAVASCRIPT', 'BOOTSTRAP', 'MATERIAL UI', 'REACT', 'REDUX', 'NODE', 'EXPRESS', 'MONGODB', 'JAVA', 'DATA STRUCTURE'];

  const [val, setVal] = useState(null);
  
  const changeHandler = (e, String) =>{
    setVal(String)
  }
  
  useEffect(()=>{
    Aos.init({duration: 1000});
    if(val === ""){
      return null;
    }else{
      console.log({val});
    }
  })
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Auto Complete</Typography>

      <Stack spacing={2} width="250px">
        <Autocomplete
        getOptionLabel={String}
        onChange={changeHandler}
        value={val} 
        size='small' 
        options={skills} 
        renderInput={(params)=> <TextField {...params} label='Skills' />} 
        />
      </Stack>
    </Stack>
  )
}

export default MuiAutoComplete;