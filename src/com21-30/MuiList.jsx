import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Box,
  List,
  ListItem,
  ListItemText,
  ListItemIcon,
  ListItemAvatar,
  Avatar,
  ListItemButton,
  Divider,
} from "@mui/material";
import MailIcon from "@mui/icons-material/Mail";

function MuiList() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack sx={12} lg={12} sm={12} xl={12} data-aos="fade-up">
      <Typography variant='h4'>List</Typography>

      <Box sx={{width: "400px", bgcolor: "#efefef"}}>
        <List>

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText
                primary='List item 1'
                secondary="seconday text"
              />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                  <ListItemAvatar>
                    <Avatar>
                      <MailIcon />
                    </Avatar>
                  </ListItemAvatar>
                </ListItemIcon>
              <ListItemText primary='List item 2' secondary="seconday text" />
            </ListItemButton>
          </ListItem>

          <Divider />

          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <ListItemAvatar>
                  <Avatar>
                    <MailIcon />
                  </Avatar>
                </ListItemAvatar>
              </ListItemIcon>
              <ListItemText primary='List item 3' secondary="seconday text" />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Stack>
  )
}

export default MuiList;