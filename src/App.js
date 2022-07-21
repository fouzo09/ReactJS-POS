import Login from "./pages/Login";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect, useState} from "react";
import AuthContext from "./contexts/AuthContext";
import { hasAuthenticated } from "./services/AuthApi";
import AuthenticatedRoutes from "./components/AuthenticatedRoutes";
import Products from "./pages/Products";

const option = {
  method: "GET",
  credentials: "include",
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Credentials": true,
  },
};

function App() {
  const [user, setUser] = useState(null);
  const [isAuthenticated, setAuthenticated] = useState(hasAuthenticated());
  
  useEffect(()=>{
    
    const getUser = async ()=>{
      const isLogged = await fetch('http://localhost:5000/api/1.0/auth-google/success', option);
      setUser(isLogged);
    };

    getUser();
  }, [])
  return (
    <>
      <AuthContext.Provider value={{isAuthenticated}}>
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
