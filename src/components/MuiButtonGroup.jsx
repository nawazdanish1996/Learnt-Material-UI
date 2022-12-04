import React, { useEffect } from 'react';
import "aos/dist/aos.css";
import Aos from 'aos';
import { Stack, Button, ButtonGroup, Typography } from "@mui/material";


function MuiButtonGroup() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, [])
  return (
    <div data-aos="fade-up">
      <Stack spacing={2}>
        <Typography variant='h4'>Button Group</Typography>

        <Typography>Buttons in a Group</Typography>
        <Stack display="block" spacing={2} direction='row'>
          <ButtonGroup variant="contained" color="info">
            <Button onClick={()=> alert("Left Clicked")}>Left</Button>
            <Button onClick={()=> alert("Center Clicked")}>Center</Button>
            <Button onClick={()=> alert("Right Clicked")}>Right</Button>
          </ButtonGroup>
        </Stack>

        <Typography>Buttons in Vertically</Typography>
        <Stack display="block" spacing={2} direction='row'>
          <ButtonGroup size="small" orientation='vertical' variant="contained" color="info">
            <Button onClick={()=> alert("Left Clicked")}>Left</Button>
            <Button onClick={()=> alert("Center Clicked")}>Center</Button>
            <Button onClick={()=> alert("Right Clicked")}>Right</Button>
          </ButtonGroup>
        </Stack>

        <Typography>Arial label: Alignment Button Group</Typography>
        <Stack display="block" spacing={2} direction='row'>
          <ButtonGroup arial-label="alignment button group" variant="contained" color="info">
            <Button onClick={()=> alert("Left Clicked")}>Left</Button>
            <Button onClick={()=> alert("Center Clicked")}>Center</Button>
            <Button onClick={()=> alert("Right Clicked")}>Right</Button>
          </ButtonGroup>
        </Stack>

      </Stack>
    </div>
  )
}

export default MuiButtonGroup