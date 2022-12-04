import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Button, Stack, IconButton, Typography } from '@mui/material';
import WindowIcon from '@mui/icons-material/Window';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import SendIcon from '@mui/icons-material/Send';

function MuiButton() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <div data-aos="fade-up">
      <Typography variant='h4'>Buttons</Typography>
      <Stack spacing={2} >
        <Typography>Button type</Typography>
        <Stack spacing={2} direction='row'>
          <Button variant="text">Text</Button>
          <Button variant="outlined">Outlined</Button>
          <Button variant="contained">Containted</Button>
        </Stack>

        <Typography>a tag</Typography>
        <Stack spacing={2} direction="row">
          <Button href="https://www.google.com" target="blank" variant="contained">A tag</Button>
        </Stack>

        <Typography>Color of Buttons</Typography>
        <Stack spacing={2} direction="row">
          <Button variant='contained' color="primary">Primary</Button>
          <Button variant='contained' color="secondary">Secondary</Button>
          <Button variant='contained' color="error">Error</Button>
          <Button variant='contained' color="warning">Warning</Button>
          <Button variant='contained' color="success">Success</Button>
          <Button variant='contained' color="info">Info</Button>
        </Stack>

        <Typography>Size of buttons</Typography>
        <Stack display='block' spacing={2} direction="row">
          <Button size="small" variant="contained">Small</Button>
          <Button size="medium" variant="contained">Medium</Button>
          <Button size="large" variant="contained">Large</Button>
        </Stack>

        <Typography>Add icons in buttons</Typography>
        <Stack display='block' spacing={2} direction="row">
          <Button variant="contained" startIcon={<WindowIcon />}>Windows</Button>
          <Button variant="contained">{<KeyboardArrowUpIcon />}</Button>
          <Button color="success" variant="contained" startIcon={<SendIcon />}>Send</Button>
          <Button color="success" variant="contained" endIcon={<SendIcon />}>Send</Button>
        </Stack>

        <Typography>Icon button</Typography>
        <Stack display='block' spacing={2} direction="row">
          <IconButton bg="error" color="success" size='large'>
            <SendIcon />
          </IconButton>
        </Stack>

        <Typography>Disabled Elevation button</Typography>
        <Stack display='block' spacing={2} direction="row">
          <Button variant="contained" disableElevation>Desabled Elevation</Button>
        </Stack>

        <Typography>Disable Ripple props on button</Typography>
        <Stack display='block' spacing={2} direction="row">
          <Button variant="contained" disableRipple>Desabled Elevation</Button>
        </Stack>
      </Stack>
    </div>
  )
}

export default MuiButton