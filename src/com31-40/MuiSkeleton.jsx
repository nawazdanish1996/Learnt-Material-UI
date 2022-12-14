import React, {useState, useEffect} from 'react';
import {
  Stack,
  Typography,
  Skeleton,
  Avatar,
  Box,
} from "@mui/material";

function MuiSkeleton() {
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    setTimeout(()=>{
      setLoading(false);
    }, 3000);
  },[])
  return (
    <Stack>
      <Typography variant='h4'>Skeleton</Typography>

      <Box sx={{width: '250px'}}>
        {
          loading === true ?
            <Skeleton variant='rectangular' width={256} height={144} animation='wave' />
          : <img 
              src="https://source.unsplash.com/random" 
              alt="my img" 
              width={256}
              height={144}
            />
        }
        <Stack 
          direction='row' 
          spacing={1}
          sx={{width: '100%', marginTop: '12px'}}
        >
          {
            loading === true ?
              <Skeleton variant='circular' width={40} height={40} animation='wave' />
            : <Avatar>V</Avatar>
          }
        </Stack>
      </Box>

      <Stack spacing={1} width="250px">
        <Skeleton variant='text' />
        <Skeleton variant='circular' width={40} height={40} />
        <Skeleton variant='rectangular' width={250} height={150} />
      </Stack>
      <Stack spacing={1} width="500px" direction='row'>
        <Skeleton animation='wave' variant='rectangular' width={250} height={150} />
        <Skeleton animation='wave' variant='rectangular' width={250} height={150} />
        <Skeleton animation='wave' variant='rectangular' width={250} height={150} />
      </Stack>
      <Stack animation={false} spacing={4} width="500px" direction='row'>
        <Skeleton animation='wave' variant='rectangular' width={250} height={150} />
        <Skeleton animation='wave' variant='rectangular' width={250} height={150} />
        <Skeleton animation='wave' variant='rectangular' width={250} height={150} />
      </Stack>
    </Stack>
  )
}

export default MuiSkeleton