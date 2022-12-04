import React, {useEffect} from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import { Typography } from '@mui/material';

function MuiTypography() {

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])

  return (
    <div data-aos="fade-up">
        <Typography color='info' variant="h1">H1 Heading</Typography>
        <Typography variant="h2">H2 Heading</Typography>
        <Typography variant="h3">H3 Heading</Typography>
        <Typography variant="h4" component="h1" gutterBottom>H4 Heading</Typography>
        <Typography variant="h5">H5 Heading</Typography>
        <Typography variant="h6">H6 Heading</Typography>
        <br />
        <Typography variant="subtitle1">sub title 1</Typography>
        <Typography variant='subtitle2'>sub title 2</Typography>
        <br />
        <Typography variant='body1'>body1</Typography>
        <Typography variant='body2'>body2</Typography>
        <br />
        <Typography>Paragraph</Typography>
    </div>
  )
}

export default MuiTypography;