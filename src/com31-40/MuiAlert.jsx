import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Alert,
  Divider,
  AlertTitle,
  Button,
} from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";

function MuiAlert() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Alert</Typography>

      <Stack spacing={2}>
        <Alert severity='error'>This is an error.</Alert>
        <Alert severity='info'>This is an info.</Alert>
        <Alert severity='warning'>This is an warning.</Alert>
        <Alert severity='success'>This is an success.</Alert>

        <Divider />

        <Alert variant='outlined' severity='error'>This is an error.</Alert>
        <Alert variant='outlined' severity='info'>This is an info.</Alert>
        <Alert variant='outlined' severity='warning'>This is an warning.</Alert>
        <Alert variant='outlined' severity='success'>This is an success.</Alert>

        <Divider />

        <Alert variant='filled' severity='error'>
          <AlertTitle>Error</AlertTitle>
          This is an error.
        </Alert>
        <Alert variant='filled' severity='info'>
          <AlertTitle>Info</AlertTitle>
          This is an info.
        </Alert>
        <Alert variant='filled' severity='warning'>
          <AlertTitle>Warning</AlertTitle>
          This is an warning.
        </Alert>
        <Alert 
          icon={<CheckIcon fontSize='inherit' />} 
          variant='filled' 
          severity='success'
          onClose={()=> alert("Close Alert")}
          action={
            <Button color='inherit' size='small'>Undo</Button>
          }
        >
          <AlertTitle>Success</AlertTitle>
          This is an success.
        </Alert>
      </Stack>
    </Stack>
  )
}

export default MuiAlert;