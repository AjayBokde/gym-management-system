import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FormControl, Link, MenuItem, Select, Box } from '@mui/material';

const Members = () => {
    const [members, setMembers] = useState([]);
    const [status, setStatus] = useState('');

    const handleChange = (e) =>{
        setStatus(e.target.value);
    }

    // useEffect(()=>{
    //     const fetchData = async () =>{
    //         await axios.get()
    //     }
    // }, [status]);
  return (
    <div className='usertable'>
        <Link >Back</Link>
        <Box>
            <FormControl fullWidth>
                <Select id='demo-simple-select' onChange={handleChange}>
                    <MenuItem value='getallcustomers'>All Members</MenuItem>
                    <MenuItem value='getactivecustomers'>Active Members</MenuItem>
                    <MenuItem value='getinactivecustomers'>Inactive Members</MenuItem>
                </Select>
            </FormControl>
        </Box>
    </div>
  )
}

export default Members