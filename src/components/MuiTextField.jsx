import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {Stack, Typography, TextField} from "@mui/material";

function MuiTextField() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <div data-aos="fade-up">
      <Typography variant='h4'>TextField</Typography>
      <Stack spacing={4}>
        <Stack display='block' spacing={2} direction='row'>
          <Typography>Types of Inputfield</Typography>
          <TextField label='Name' />
          <TextField label='Name' variant='outlined' />
          <TextField label='Name' variant='filled' />
          <TextField label='Name' variant='standard' />
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
          <Typography>Size of Inputfield</Typography>
          <TextField size="small" label='Name' variant='outlined' />
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
          <Typography>Helper of Inputfield</Typography>
          <TextField helperText='Do not share password with anyone' label='Name' variant='outlined' />
        </Stack>

        <Stack display='block' spacing={2} direction='row'>
          <Typography>if error of Inputfield</Typography>
          <TextField error helperText='Do not share password with anyone' label='Name' variant='outlined' />
        </Stack>

      </Stack>
    </div>
  )
}

export default MuiTextField;