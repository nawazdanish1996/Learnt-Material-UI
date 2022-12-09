import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Chip,
  Avatar,
} from "@mui/material";
import FaceIcon from "@mui/icons-material/Face";

function MuiChip() {
  const [chips, setChips] = useState(['chip 1', 'chip 2', 'chip 3']);

  const deleteHander = (chipToDelete) =>{
    setChips(chips => chips.filter((chip) => chip !== chipToDelete));
  }

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Chip</Typography>

      <Stack spacing={1} direction="row">
        <Chip 
          label="Chip"
          color="primary"
          size="small"
        />

        <Chip 
          label="Chip Outlined"
          color="secondary"
          size="small"
          variant='outlined'
        />

        <Chip 
          label="Avatar"
          color="secondary"
          size="small"
          variant='outlined'
          avatar={<Avatar></Avatar>}
        />
        <Chip 
          label="Icon"
          color="secondary"
          size="small"
          variant='outlined'
          icon={<FaceIcon />}
        />
        <Chip 
          label="Icon"
          color="error"
          size="small"
          icon={<FaceIcon />}
          onDelete={()=> alert("Deleted Handler")}
        />

        {
          chips.map(chip =>{
            return(
              <Chip 
                label={chip} 
                key={chip} 
                onDelete={()=> deleteHander(chip)} 
              />
            )
          })
        }
      </Stack>
    </Stack>
  )
}

export default MuiChip;