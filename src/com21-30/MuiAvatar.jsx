import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Avatar,
  AvatarGroup,
} from "@mui/material";

function MuiAvatar() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Avatar</Typography>

      <Stack spacing={1} direction='row'>
        <Avatar loading="lazy" src="https://source.unsplash.com/random" alt='Nawaz Danish' />

        <AvatarGroup direction="row" spacing={1}>
          <Avatar variant='square' sx={{bgcolor: 'primary.light', width: 48, height: 48}}>BW</Avatar>
          <Avatar variant='rounded' sx={{bgcolor: 'success.light'}}>CK</Avatar>
          <Avatar loading="lazy" src="https://source.unsplash.com/random" alt='Nawaz Danish' />
          <Avatar loading="lazy" src="https://source.unsplash.com/random" alt='Nawaz Danish' />
        </AvatarGroup>
      </Stack>
    </Stack>
  )
}

export default MuiAvatar;