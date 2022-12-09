import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Badge,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

function MuiBadge() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Badge</Typography>

      <Stack spacing={2} direction='row'>
        <Badge badgeContent={5} color='primary'>
            <MailIcon />
        </Badge>
        <Badge badgeContent={100} color='primary'>
            <MailIcon />
        </Badge>
        <Badge badgeContent={9999} max={999} color='primary'>
            <MailIcon />
        </Badge>
        <Badge badgeContent={0} color='secondary' showZero>
            <MailIcon />
        </Badge>
        <Badge variant='dot' color='secondary'>
            <MailIcon />
        </Badge>
        <Badge variant='dot' color='secondary' invisible={true}>
            <MailIcon />
        </Badge>
        {/* <Badge variant='dot' color='secondary' invisible={unreadEmails.length === 0}>
            <MailIcon />
        </Badge> */}
      </Stack>
    </Stack>
  )
}

export default MuiBadge;