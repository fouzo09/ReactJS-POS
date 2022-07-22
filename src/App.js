import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
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
import { AUTH_BASE_URL, option } from "./global";

function App() {

  const auth = useSelector((state)=> state.auth);
  const dispatcher = useDispatch();

  const authContext = useMemo(()=>({

    login: async (credentials)=>{

      const response = await fetch(`${AUTH_BASE_URL}/1.0/auth`, option('POST', credentials)); 
      if(response.status === 200){
        const data = await response.json();
        dispatcher(SET_AUTH(data));
      }
    },

    isLogged: ()=>{
      return ((Object.keys(auth)).length) ? true : false;;
    },

    getAuth: ()=>{
      return auth;
    },   

    getLogout: ()=>{
      if(auth){
        dispatcher(LOGOUT());
      }
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
