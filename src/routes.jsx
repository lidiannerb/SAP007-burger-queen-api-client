import {
  BrowserRouter as Router,
  Routes,
  Route,  
  Navigate
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import {Menu} from "./pages/menu";
import {Kitchen} from "./pages/kitchen";
import {getToken} from "./services/token";

const PrivateRoute = ({ children, redirectTo}) => {
  const isAuthenticated = getToken("") !== null;
  console.log("isAuth", isAuthenticated);
    return isAuthenticated? children : <Navigate to={redirectTo}/>;
};

const RedirectRoutes = () => {
    
  return (    
    <Router>      
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Menu" element={<PrivateRoute redirectTo="/"> 
          <Menu />
        </PrivateRoute>}/>
        <Route path="/Kitchen" element={<PrivateRoute redirectTo="/"> 
          <Kitchen />
        </PrivateRoute>}/>
      </Routes>
    </Router>
  );  
};

export default RedirectRoutes;

 