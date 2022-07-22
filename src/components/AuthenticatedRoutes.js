import React, { useContext } from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import AuthContext from '../contexts/AuthContext';

const AuthenticatedRoutes = ({path, component})=>{

    const {isLogged} = useContext(AuthContext);

    return isLogged() ? <Outlet /> : <Navigate to='/login' />;
  
}

const RedirectToAuthenticatedRoutes = ({path, component})=>{

    const {isLogged} = useContext(AuthContext);

    return isLogged() ? <Navigate to='/' /> : <Outlet />;
  
}

export {AuthenticatedRoutes, RedirectToAuthenticatedRoutes};