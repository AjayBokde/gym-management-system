import './App.css';
import Loginform from './Components/loginform/Loginform';
import { BrowserRouter, createBrowserRouter, Navigate, Route, RouterProvider, useRoutes } from 'react-router-dom';
import { useState } from 'react';
import Home from './Components/homepage/Home';
import Members from './Components/members/Members';
import Rootcomponent from './Components/root/Rootcomponent';

function App() {
  const [isAthunticated, setAthunticated] = useState(false);
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Rootcomponent />,
      children: [
        {path: 'home', element: <Home />}
      ]
    },
    { 
      path: '/login',
      element: <Loginform />
    },
    // {
    //   path: 'allmembers',
    //   element: <Members />
    // }
  ])
  return <BrowserRouter router={router}>
          
      </BrowserRouter>
  
}

export default App;
