import React, { useContext } from 'react';
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate,useLocation} from 'react-router-dom';
import Loading from '../pages/Loading';


const PrivateRoute = ({children}) => {
    const {user,loading}=useContext(AuthContext);
    const location=useLocation();
    if(user){
        return children;
    }
    if(loading){
        return <Loading></Loading>
    }
    return <Navigate to='/auth/login' state={location.pathname}></Navigate>
};

export default PrivateRoute;