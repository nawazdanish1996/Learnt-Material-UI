import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
} from "@mui/material";

function MuiDialog() {
  const [open, setOpen] = useState(false);

    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Dialog</Typography>

      <Button onClick={()=> setOpen(true)}>Open Dialog</Button>
      <Dialog 
        aria-labelledby='dialog-title' 
        aria-describedby='dialog-description'
        open={open}
        onClose={()=> setOpen(false)}
      >
        <DialogTitle id='dialog-title'>Submit the test?</DialogTitle>
        <DialogContent id='dialog-description'>
          <DialogContentText>
            Are you sure you want to submit test?
            You will not be able to edit after submition.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={()=> setOpen(false)}>Cancel</Button>
          <Button onClick={()=> setOpen(false)} autoFocus>Submit</Button>
        </DialogActions>
      </Dialog>
    </Stack>
  )
}

export default MuiDialog;