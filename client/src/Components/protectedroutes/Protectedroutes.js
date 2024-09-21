import React from 'react';
import { Navigate } from 'react-router-dom';

const Protectedroutes = ({ element }) => {
        const isAuthenticated = true;
        // your logic to check if user is authenticated
        return isAuthenticated ? element : <Navigate to="/login" />;
}

export default Protectedroutes;