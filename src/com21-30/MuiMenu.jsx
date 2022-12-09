import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  AppBar,
  Toolbar,
  Menu,
  MenuItem,
  IconButton,
  Button,
} from "@mui/material";
import CatchingPokemonIcon from '@mui/icons-material/CatchingPokemon';

function MuiMenu() {
  const [anchorEl, setAnchorEl] = useState(false);
  console.log(anchorEl);

  const handleClick = () =>{
    setAnchorEl(true);
  }
  const closeHandler = () =>{
    setAnchorEl(null);
  }

    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Menu</Typography>

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
            <Button onClick={handleClick} id="resources-button" color="inherit">Resources</Button>
            <Button color="inherit">Login</Button>
          </Stack>
          <Menu 
            id="resources-menu" 
            anchorEl={anchorEl}
            MenuListProps={{
              'aria-labelledby' : 'resources-button'
            }}
            onClose={closeHandler}
          >
            <MenuItem onClick={closeHandler}>Blog</MenuItem>
            <MenuItem onClick={closeHandler}>Podcast</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </Stack>
  )
}

export default MuiMenu;