import React, { use } from 'react';
import { Navigate, useLocation } from 'react-router';
import { AuthContext } from '../contexts/AuthContext';

const PrivetRoute = ({children}) => {

    const {user} =  use(AuthContext);
    const location = useLocation();
    console.log(location.pathname);

    if(!user){
        return <Navigate to="/signin" state={location.pathname}></Navigate>;
    }

    return children;
    
};

export default PrivetRoute;