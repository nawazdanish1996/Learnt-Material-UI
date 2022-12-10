import React from 'react';
import {
  Stack,
  Typography,
} from "@mui/material";
import { LoadingButton } from '@mui/lab';
import SaveIcon from "@mui/icons-material/Save";

const MuiLoadingButton = () => {
  return (
    <Stack>
      <Typography variant='h4'>Loading Button</Typography>

      <Stack spacing={2} direction='row'>
        <LoadingButton
          variant='outlined'
        >
          Loading Button
        </LoadingButton>

        <LoadingButton
          variant='outlined'
          loading
        >
          Loading Button
        </LoadingButton>

        <LoadingButton
          variant='outlined'
          loading
          loadingIndicator='loading...'
        >
          Fetch Data
        </LoadingButton>

        <LoadingButton
          variant='outlined'
          loadingPosition='start'
          startIcon={<SaveIcon />}
        >
          Save
        </LoadingButton>

        <LoadingButton
          variant='outlined'
          loading
          loadingPosition='start'
          startIcon={<SaveIcon />}
        >
          Save
        </LoadingButton>
      </Stack>
  </Stack>
  )
}

export default MuiLoadingButton;