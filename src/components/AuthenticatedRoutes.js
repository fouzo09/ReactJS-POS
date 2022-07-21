import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const AuthenticatedRoutes = ({path, component})=>{

    const {isAuthenticated} = useContext(AuthContext);

    return isAuthenticated ? <Outlet /> : <Navigate to='/login' />;
  
}

export default AuthenticatedRoutes;