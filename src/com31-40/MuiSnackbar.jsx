import React, { useEffect, useState} from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Snackbar,
  Button,
} from "@mui/material";

function MuiSnackbar() {
  const [open, setOpen] = useState(false);

  const handleClose = () =>{
    setOpen(false);
  }

    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Snackbar</Typography>

      <Button onClick={()=> setOpen(true)} >Submit</Button>
      <Snackbar 
        message='Form Submitted Successfully!' 
        autoHideDuration={5000}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
      />
    </Stack>
  )
}

export default MuiSnackbar;