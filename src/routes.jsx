import {
  BrowserRouter as Router,
  Routes,
  Route  
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import {Menu} from "./pages/menu";
import {Kitchen} from "./pages/kitchen";


const RedirectRoutes = () => {
  
  return (    
    <Router>      
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Menu" element={<Menu />}/>
        <Route path="/Kitchen" element={<Kitchen />}/>
      </Routes>
    </Router>
  );  
};

export default RedirectRoutes;

 