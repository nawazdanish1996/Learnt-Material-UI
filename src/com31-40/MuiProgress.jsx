import React, {} from 'react';
import {
  Stack,
  Typography,
  CircularProgress,
  LinearProgress,
} from "@mui/material";

function MuiProgress() {
  return (
    <Stack>
      <Typography variant="h4">Progress</Typography>

      <Stack spacing={2}>
        <CircularProgress color='info' />
        <CircularProgress color='success' />
        <CircularProgress variant='determinate' value={60} color='info' />
      </Stack>

      <Stack spacing={2}>
        <LinearProgress color='info' />
        <LinearProgress color='success' />
        <LinearProgress variant='determinate' value={60} color='info' />
      </Stack>
    </Stack>
  )
}

export default MuiProgress