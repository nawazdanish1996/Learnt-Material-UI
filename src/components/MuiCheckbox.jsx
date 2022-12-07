import React, { useEffect, useState } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Box,
  Typography,
  FormControlLabel,
  Checkbox,
  FormControl,
  FormLabel,
  FormGroup,
} from "@mui/material";
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import BookmarkIcon from '@mui/icons-material/Bookmark';

function MuiCheckbox() {
  const [val, setVal] = useState(false);
  const [skillVal, setSkillVal] = useState("");
  const [st, setSt] = useState([]);
  // console.log(val);
  console.log("Skill: "+skillVal);

  const changeHandler = (e) =>{
    setVal(e.target.checked);
  }
  
  const changeSkillsHandler = (e) =>{
    setSkillVal(e.target.value);
    setSt([...st, skillVal])
    console.log(e.target.value);
  }

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[])
    
  return (
    <div data-aos="fade-up">
      <Box>
        <Typography variant='h6'>Radio Button</Typography>
        <Box>
          <FormControlLabel label='I accept terms and conditions' 
          control={<Checkbox value={val} onChange={changeHandler} />} />
        </Box>

        <Box>
          <Checkbox icon={<BookmarkIcon />}
          checkedIcon={<BookmarkBorderIcon />}
          value={val}
          checked={val}
          onChange={changeHandler}
          />
        </Box>

        <Box>
          <FormControl error>
            <FormLabel>Skills</FormLabel>
            {
              st.map((val, ind)=>{
                return(
                  <div key={ind}>
                    <Typography>{val}</Typography>
                  </div>
                )
              })
            }
            <FormGroup row>
              <FormControlLabel label='HTML' 
              control={<Checkbox value="HTML" onChange={changeSkillsHandler} />} />
              <FormControlLabel label='CSS' 
              control={<Checkbox value="CSS" onChange={changeSkillsHandler} />} />
              <FormControlLabel label='BOOTSTRAP' 
              control={<Checkbox value="BOOTSTRAP" onChange={changeSkillsHandler} />} />
              <FormControlLabel label='JAVASCRIPT' 
              control={<Checkbox value="JAVASCRIPT" onChange={changeSkillsHandler} />} />
              <FormControlLabel label='REACT' 
              control={<Checkbox value="REACT" onChange={changeSkillsHandler} />} />
              <FormControlLabel label='REDUX' 
              control={<Checkbox value="REDUX" onChange={changeSkillsHandler} />} />
              <FormControlLabel label='MATERIAL UI' 
              control={<Checkbox value="MATERIAL UI" onChange={changeSkillsHandler} />} />
              <FormControlLabel label='NODE' 
              control={<Checkbox value="NODE" onChange={changeSkillsHandler} />} />
            </FormGroup>
          </FormControl>
        </Box>
      </Box>
    </div>
  )
}

export default MuiCheckbox;