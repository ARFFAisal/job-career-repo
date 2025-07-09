import React, { use } from 'react';
import { Navigate } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const PrivetRoute = ({children}) => {

    const {user} =  use(AuthContext);

    if(!user){
        return <Navigate to="/signin"></Navigate>;
    }

    return children;
    
};

export default PrivetRoute;