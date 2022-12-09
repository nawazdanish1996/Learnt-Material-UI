import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  BottomNavigation,
  BottomNavigationAction,
  Typography,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonIcon from "@mui/icons-material/Person";

function MuiBottomNavigation() {
  const [value, setValue] = useState(0);

  const handlerChange = (e, newValue) =>{
    setValue(newValue);
  }

    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <>
      <Typography variant="h4">Bottom Navigation</Typography>
      <BottomNavigation
        data-aos="fade-up"
        sm={{width: '100%', position: 'absolute', bottom: 0}}
        value={value}
        onChange={handlerChange}
        showLabels
      >
        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
        <BottomNavigationAction label="Favorite" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="Profile" icon={<PersonIcon />} />
      </BottomNavigation>
    </>
  )
}

export default MuiBottomNavigation;