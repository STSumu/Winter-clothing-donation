import React, { useContext } from 'react';
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate } from 'react-router-dom';
import Loading from '../pages/Loading';


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    if(user){
        return children;
    }
    if(loading){
        return <Loading></Loading>
    }
    return <Navigate to='/auth/login'></Navigate>
};

export default PrivateRoute;