import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import { Typography, Stack, ToggleButtonGroup, ToggleButton } from '@mui/material';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';

function MuiToggleButton() {

    useEffect(()=>{
      Aos.init({duration: 1000});
    },[]);
    
  return (
    <div data-aos="fade-up">
      <Stack spacing={4}>
      <Typography variant="h4">Toggle Button</Typography>

        <Typography>Bold, Italic, Underlined Buttons</Typography>
        <Stack spacing={2} direction='row'>
          <ToggleButtonGroup aria-label='text formatting'>
            <ToggleButton value='bold' arial-label='bold'><FormatBoldIcon /></ToggleButton>
            <ToggleButton value='italic' arial-label='italic'><FormatItalicIcon /></ToggleButton>
            <ToggleButton value='underlined' arial-label='underlined'><FormatUnderlinedIcon /></ToggleButton>
          </ToggleButtonGroup>
        </Stack>

      </Stack>
    </div>
  )
}

export default MuiToggleButton;