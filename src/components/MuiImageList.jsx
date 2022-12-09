import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  ImageList,
  ImageListItem,
} from "@mui/material";

function MuiImageList() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Image List</Typography>

      <Stack spacing={4}>
        <ImageList
          sx={{width: "500px", height:"450px"}}
          rowHeight={164}
          >
          <ImageListItem
            image="https://source.unsplash.com/random"
          />
        </ImageList>
      </Stack>
    </Stack>
  )
}

export default MuiImageList;