import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  SpeedDial,
  SpeedDialAction,
  SpeedDialIcon,
} from "@mui/material";
import CopyIcon from "@mui/icons-material/FileCopyOutlined";
import PrintIcon from "@mui/icons-material/Print";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";

function MuiSpeedDial() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
      <SpeedDial
        data-aos="fade-up"
        ariaLabel='Navigation speed dial' 
        sx={{position: 'absolute', bottom: 16, right: 16}}
        icon={<SpeedDialIcon openIcon={<EditIcon />} />}
      >
        <h1>Speed Dial</h1>
        <SpeedDialAction icon={<CopyIcon />} tooltipTitle='Copy' tooltipOpen />
        <SpeedDialAction icon={<PrintIcon />} tooltipTitle='Print' tooltipOpen />
        <SpeedDialAction icon={<ShareIcon />} tooltipTitle='Share' tooltipOpen />
      </SpeedDial>
  )
}

export default MuiSpeedDial;