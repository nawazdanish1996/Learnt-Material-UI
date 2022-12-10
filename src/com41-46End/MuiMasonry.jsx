import React from 'react';
import {
  Stack,
  Typography,
  Paper,
} from "@mui/material";
import { Masonry } from '@mui/lab';

function MuiMasonry() {
  const heights =[
    150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80
  ]
  return (
    <Stack>
      <Typography variant='h4'>Masonry</Typography>

      <Stack sx={{width: 500, minHeight: 400}}>
        <Masonry columns={4} spacing={2}>
          {
            heights.map((val, ind)=>{
              return(
                <Paper sx={{color: "success.light"}} key={ind}>{val}</Paper>
              )
            })
          }
        </Masonry>
      </Stack>
    </Stack>
  )
}

export default MuiMasonry;