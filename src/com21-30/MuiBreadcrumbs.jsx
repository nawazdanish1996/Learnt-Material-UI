import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Box,
  Breadcrumbs,
  Link,
} from "@mui/material";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";

function MuiBreadcrumbs() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Breadcrumbs</Typography>
      <Box m={2}>
        {/* separator="/" */}
        <Breadcrumbs
          arial-label="breadcrumb" 
          separator={<NavigateNextIcon fontSize='small' />}
          maxItems={3}
          itemsAfterCollapse={2}
          // itemsBeforeCollapse={2}
        >
          <Link underline="hover" href="true">Home</Link>
          <Link underline="hover" href="true">Catalog</Link>
          <Link underline="hover" href="true">Accessories</Link>
          <Typography color="primay.light">aa</Typography>
        </Breadcrumbs>
      </Box>
    </Stack>
  )
}

export default MuiBreadcrumbs;