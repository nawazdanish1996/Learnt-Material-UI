import React, { useEffect } from 'react';
import Aos from 'aos';
import "aos/dist/aos.css";
import {
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Paper,
} from "@mui/material";

function MuiTable() {
    useEffect(()=>{
      Aos.init({duration: 1000});
    },[])
    
  return (
    <TableContainer component={Paper} data-aos="fade-up">
      <Typography variant='h4'>Table</Typography>
      <Table aria-label="simple table" stickyHeader>
        <TableHead>
          <TableRow>
            <TableCell sx={{fontWeight: "bold"}}>ID</TableCell>
            <TableCell sx={{fontWeight: "bold"}} align='center'>Name</TableCell>
            <TableCell sx={{fontWeight: "bold"}} align='center'>Email</TableCell>
            <TableCell sx={{fontWeight: "bold"}} align='center'>Gender</TableCell>
            <TableCell sx={{fontWeight: "bold"}} align='center'>IP Address</TableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {
            tableData.map((val, ind)=>{
              const {id, first_name, last_name, email, gender, ip_address} = val;
              return(
                <TableRow 
                  key={ind}
                  sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                  <TableCell>{id}</TableCell>
                  <TableCell>{first_name} {last_name}</TableCell>
                  <TableCell align='center'>{email}</TableCell>
                  <TableCell align='center'>{gender}</TableCell>
                  <TableCell align='center'>{ip_address}</TableCell>
                </TableRow>
              )
            })
          }
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default MuiTable;

const tableData = [{
  "id": 1,
  "first_name": "Afton",
  "last_name": "Hodcroft",
  "email": "ahodcroft0@usatoday.com",
  "gender": "Agender",
  "ip_address": "32.243.196.31"
}, {
  "id": 2,
  "first_name": "Abeu",
  "last_name": "Filipychev",
  "email": "afilipychev1@senate.gov",
  "gender": "Male",
  "ip_address": "233.208.77.225"
}, {
  "id": 3,
  "first_name": "Portie",
  "last_name": "Itter",
  "email": "pitter2@amazon.co.uk",
  "gender": "Male",
  "ip_address": "253.255.40.130"
}, {
  "id": 4,
  "first_name": "Alonzo",
  "last_name": "Denecamp",
  "email": "adenecamp3@google.es",
  "gender": "Male",
  "ip_address": "175.240.151.199"
}, {
  "id": 5,
  "first_name": "Orville",
  "last_name": "Bowbrick",
  "email": "obowbrick4@rediff.com",
  "gender": "Male",
  "ip_address": "9.246.43.202"
}, {
  "id": 6,
  "first_name": "Ninnetta",
  "last_name": "Fredy",
  "email": "nfredy5@prweb.com",
  "gender": "Female",
  "ip_address": "245.147.95.22"
}, {
  "id": 7,
  "first_name": "Chic",
  "last_name": "Cancelier",
  "email": "ccancelier6@bing.com",
  "gender": "Male",
  "ip_address": "84.156.42.226"
}, {
  "id": 8,
  "first_name": "Pooh",
  "last_name": "Golling",
  "email": "pgolling7@archive.org",
  "gender": "Agender",
  "ip_address": "161.166.201.85"
}, {
  "id": 9,
  "first_name": "Rene",
  "last_name": "Greenrde",
  "email": "rgreenrde8@zimbio.com",
  "gender": "Female",
  "ip_address": "242.58.148.179"
}, {
  "id": 10,
  "first_name": "Alida",
  "last_name": "Kinsman",
  "email": "akinsman9@squarespace.com",
  "gender": "Female",
  "ip_address": "61.117.136.32"
}]