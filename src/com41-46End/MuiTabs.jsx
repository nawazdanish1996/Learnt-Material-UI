import React, {useState} from 'react';
import {
  Stack,
  Typography,
  Tab,
} from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';

function MuiTabs() {
  const [val, setVal] = useState("1");

  const handleChange = (e, newVal) =>{
    setVal(newVal);
  }

  return (
    <Stack>
      <Typography variant='h4'>Tabs / Table</Typography>

      <Stack>
        <TabContext value={val}>
          <Stack sx={{borderBottom: 1, borderColor: 'divider'}}>
            <TabList 
              aria-label="Tabs expample"
              onClick={handleChange}
              indicatorColor='secondary'
              textColor="secondary"
              centered
            >
              <Tab label='Tab1' value='1' />
              <Tab label='Tab2' value='2' />
              <Tab label='Tab3' value='3' />
            </TabList>
          </Stack>
          <TabPanel value='1'>Panel One</TabPanel>
          <TabPanel value='2'>Panel Two</TabPanel>
          <TabPanel value='3'>Panel Three</TabPanel>
        </TabContext>
      </Stack>
    </Stack>
  )
}

export default MuiTabs