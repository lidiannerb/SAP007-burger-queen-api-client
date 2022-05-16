import {
  BrowserRouter as Router,
  Routes,
  Route  
} from "react-router-dom";
import Login from "./pages/login";
import Register from "./pages/register";
import {Menu} from "./pages/menu";


const RedirectRoutes = () => {
  
  return (    
    <Router>      
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/Register" element={<Register />}/>
        <Route path="/Menu" element={<Menu />}/>
      </Routes>
    </Router>
  );  
};

export default RedirectRoutes;

 