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

    const arr = [
      {
        img: 'https://source.unsplash.com/random',
        title: 'img1'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img2'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img1'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img2'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img1'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img2'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img1'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img2'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img1'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img2'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img1'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img2'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img1'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img2'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
      {
        img: 'https://source.unsplash.com/random',
        title: 'img3'
      },
    ]
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Image List</Typography>

      <Stack spacing={4}>
        <ImageList
          sx={{width: "500px", height:"450px"}}
          gap={8}
          cols={5}
          variant="woven"
          >
            {
              arr.map((val, ind)=>{
                return(
                    <ImageListItem key={ind}>
                      <img loading="lazy" src={val.img} alt={val.title} />
                    </ImageListItem>
                  )
              })
            }
        </ImageList>
      </Stack>
    </Stack>
  )
}

export default MuiImageList;