import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Stack,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function MuiAccordion() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <Stack data-aos="fade-up">
      <Typography variant='h4'>Accordion  {`Expand details`}</Typography>

      <Accordion>
        <AccordionSummary
        id='panel1-header'
        aria-controls='panel1-content'
        expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant='h6'>Who is Nawaz Danish?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio incidunt minus tenetur! Amet, officiis odit, corporis porro harum cumque ipsum deserunt laudantium voluptas sit saepe quibusdam facere, recusandae tempore debitis mollitia sequi rerum ipsam cupiditate? Magni itaque alias nesciunt officia, esse eligendi voluptatum praesentium dignissimos delectus consequuntur voluptate sapiente corrupti.</Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
        id='panel2-header'
        aria-controls='panel2-content'
        expandIcon={<ExpandMoreIcon />}
        >
          <Typography variant='h6'>What does Nawaz Danish?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio incidunt minus tenetur! Amet, officiis odit, corporis porro harum cumque ipsum deserunt laudantium voluptas sit saepe quibusdam facere, recusandae tempore debitis mollitia sequi rerum ipsam cupiditate? Magni itaque alias nesciunt officia, esse eligendi voluptatum praesentium dignissimos delectus consequuntur voluptate sapiente corrupti.</Typography>
        </AccordionDetails>
      </Accordion>
    </Stack>
  )
}

export default MuiAccordion;