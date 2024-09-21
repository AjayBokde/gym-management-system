import React from 'react'
import './Rootcomponent.css';
import { Navigate, useNavigate } from 'react-router-dom';

const Rootcomponent = () => {
    const navigate = useNavigate();
  return (
    <div className='root__comp'>
        <button onClick={()=> navigate('/')}>go to home</button>
    </div>
  )
}

export default Rootcomponent;