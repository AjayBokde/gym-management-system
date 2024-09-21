import React, { useState } from 'react';
import {Box, Button, InputAdornment, TextField} from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import SearchIcon from '@mui/icons-material/Search';
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const [customer, setCustomer] = useState([
        {}
    ]);

    const navigate = useNavigate();
    
  return (
    <div className='usertable'>
      <Button variant='contained' sx={{mb:3}}><RefreshIcon sx={{ml: -1, mr:1}} /> Refresh System</Button>
      <br />
      <Button color='secondary' variant='contained'>Add Member</Button>
      <Button color='secondary' variant='contained' onClick={()=> navigate('/allmembers')}>Member List</Button>
      <Box component="form" sx={{width: '100%'}} noValidate autoComplete='off'>
        <TextField type='search' id='outlined-search' fullWidth placeholder='Search a member using name' InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <SearchIcon />
            </InputAdornment>
          )
        }}>

        </TextField>
      </Box>
    </div>
  )
}

export default Home