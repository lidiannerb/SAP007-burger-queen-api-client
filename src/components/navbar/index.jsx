import { useState } from "react";
import {GiHamburgerMenu} from "react-icons/gi";
import { IoMdCloseCircle } from "react-icons/io";
import { Button } from "../../components/button";
import { Link } from "react-router-dom";
import { getRole } from "../../services/token";
import "./style.css";

export const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  return (
    <nav className="navbar">      
      <Button
        onClick={handleToggle}
        className="btn-toggle"
      >
        {navbarOpen ? <IoMdCloseCircle className="icon"/> : <GiHamburgerMenu className="icon"/>}
        
      </Button>
      <ul className={`menu-nav ${navbarOpen ? "show-menu" : ""}`}>
        <li>
          <Link className="link" to="/ReadyOrders"> Pedidos Prontos </Link>
        </li>
        <li> 
          <Link className="link" to="/Historic"> Histórico de Pedidos </Link>
        </li>
        {getRole() === "kitchen" ?
          <li> 
            <Link className="link" to="/Kitchen"> Cozinha </Link>
          </li> : ""
        }
      </ul>
    </nav>
  );
};