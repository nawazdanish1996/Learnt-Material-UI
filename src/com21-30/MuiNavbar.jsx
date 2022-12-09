import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  AppBar,
  Toolbar,
  IconButton,
  Button,
} from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

function MuiNavbar() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Navbar</Typography>

      <AppBar position="static">
        <Toolbar>
          <IconButton 
            size="large" 
            edge="start"
            color="inherit"
            arial-label="logo"
            href="https://www.google.com"
            target="_blank"
          >
            <CatchingPokemonIcon />
          </IconButton>
          <Typography sx={{flexGrow: 1}} variant="h6" component="div">POKEMON</Typography>
          <Stack direction="row" spacing={2}>
            <Button color="inherit">Features</Button>
            <Button color="inherit">Pricing</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Login</Button>
          </Stack>
        </Toolbar>
      </AppBar>
    </Stack>
  )
}

export default MuiNavbar;