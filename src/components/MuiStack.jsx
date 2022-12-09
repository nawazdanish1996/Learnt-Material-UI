import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Box,
  Divider,
} from "@mui/material";

function MuiStack() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Stack</Typography>

      <Stack 
        sx={{
        // color: "success.light",
        border: "1px solid",
        }}
        direction="row"
        spacing={2}
        divider={<Divider orientation='vertical' flexItem />}
      >
        <Box bgcolor="success.light" height="100px" width="100px" color="white">1</Box>
        <Box bgcolor="primary.light" height="100px" width="100px" color="white">2</Box>
        <Box bgcolor="success.light" height="100px" width="100px" color="white">1</Box>
        <Box bgcolor="primary.light" height="100px" width="100px" color="white">2</Box>
        <Box bgcolor="success.light" height="100px" width="100px" color="white">1</Box>
        <Box bgcolor="primary.light" height="100px" width="100px" color="white">2</Box>
      </Stack>
    </Stack>
  )
}

export default MuiStack;