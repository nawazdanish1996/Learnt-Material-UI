import React from 'react';
import {
  Box,
  Typography,
} from "@mui/material";

function MuiResponsiveness() {
  return (
    <Box 
      sx={{
        height: '300px',
        width: {
          xs: 100,
          sm: 200,
          md: 300,
          lg: 400,
          xl: 500
        },
        bgcolor: 'primary.main',
      }}
    >
      <Typography
        variant='h1'
        fontSize={{
          xs: 8,
          sm: 10,
          md: 12,
          lg: 25,
          xl: 25
        }}
      >Responsiveness</Typography>
    </Box>
  )
}

export default MuiResponsiveness;