import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Link,
} from "@mui/material";

function MuiLink() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Link</Typography>

      <Stack direction ="row" spacing={2} m={4} >
        <Link href="true">Link1</Link>
        <Link href="true" color="secondary">Link2</Link>
        <Link href="true" underline="hover">Hover</Link>
        <Link href="true" underline="none">Hover none</Link>
        <Typography variant="h6">
          <Link href="true" color="secondary" underline='none'>Link2</Link>
        </Typography>
      </Stack>
    </Stack>
  )
}

export default MuiLink;