import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Tooltip,
  Typography,
  IconButton,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

function MuiTooltip() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <>
    <Typography variant='h4'>Tooltip</Typography>
    <Tooltip 
      leaveDelay={300}
      enterDelay={500} 
      title='delete' 
      placement="right" 
      arrow data-aos="fade-up">

      <IconButton>
        <DeleteIcon />
      </IconButton>
    </Tooltip>
    </>
  )
}

export default MuiTooltip;