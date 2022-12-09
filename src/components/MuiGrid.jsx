import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Grid,
  Box,
} from "@mui/material";

function MuiGrid() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Grid</Typography>
      <Typography>xs=Mobile sm=Tablet  md=Desktop lg & xl=Large Monitor</Typography>
      <Typography>total: 12</Typography>
      <Typography>{`Grid conrainer spacing={{xs: 2, sm: 2, lg:2, xl:2}}`}</Typography>
      <Typography>{`Grid item xs={4} sm={6} lg={12} xl={12}`}</Typography>

      <Grid container spacing={{xs: 2, sm: 2, lg:2, xl:2}}>
        <Grid item xs={4} sm={6} lg={12} xl={12}>
          <Box bgcolor="primary.light" my={2}>Item 1</Box>
        </Grid>
        <Grid item xs={4} sm={6} lg={12} xl={12}>
          <Box bgcolor="primary.light" my={2}>Item 2</Box>
        </Grid>
        <Grid item xs={4} sm={6} lg={12} xl={12}>
          <Box bgcolor="primary.light" my={2}>Item 3</Box>
        </Grid>
        <Grid item xs={4} sm={6} lg={12} xl={12}>
          <Box bgcolor="primary.light" my={2}>Item 4</Box>
        </Grid>
      </Grid>
    </Stack>
  )
}

export default MuiGrid;