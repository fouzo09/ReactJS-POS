import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useMemo, useState} from "react";
import { Provider } from 'react-redux';
import Login from "./pages/Login";
import Home from "./pages/Home";
import Products from "./pages/Products";
import AuthContext from "./contexts/AuthContext";
import { hasAuthenticated } from "./services/AuthApi";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";

import { useSelector, useDispatch } from 'react-redux';
import { SET_AUTH, GET_AUTH, LOGOUT } from './state/actions';

function App() {

  const isLogged = useSelector((state)=> state.auth);
  const dispatcher = useDispatch();

  console.log(isLogged);

  const authContext = useMemo(()=>({

    login: (credentials)=>{
       
      dispatcher(SET_AUTH(credentials));   
    },

    isLogged: ()=>{
      return isLogged;
    },

    getAuth: ()=>{

    },   

    getLogout: ()=>{

    }
    
  }));
  
  return (
    <>
      <AuthContext.Provider value={authContext}>
        <BrowserRouter>
          <Routes>
            <Route exact path='/' element={<AuthenticatedRoutes/>}>
              <Route exact path='/' element={<Home/>}/>
            </Route>
            <Route exact path='/products' element={<AuthenticatedRoutes/>}>
              <Route exact path='/products' element={<Products/>}/>
            </Route>
            <Route path="/login" element={<Login />} />
          </Routes>
        </BrowserRouter>
      </AuthContext.Provider>
    </>
  );
}

export default App;
