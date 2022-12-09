import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Drawer,
  Box,
  IconButton,

} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

function MuiDrawer() {
  const  [isOpen, setIsOpen] = useState(false);

    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Drawer</Typography>

      <IconButton 
        size='large' 
        edge="start"
        color="inherit"
        aria-label='logo'
        onClick={()=> setIsOpen(true)}
      >
          <MenuIcon />
      </IconButton>

      <Drawer
        anchor='left' 
        open={isOpen} 
        onClose={()=> setIsOpen(false)}
      >
        <Box
          p={2} 
          width="250px" 
          textAlign="center" 
          role="presentation"
        >
          <IconButton 
            size='large' 
            edge="start"
            color="inherit"
            aria-label='logo'
            onClick={()=> setIsOpen(false)}
          >
              <MenuIcon />
          </IconButton>
          <Typography vairant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
    </Stack>
  )
}

export default MuiDrawer;