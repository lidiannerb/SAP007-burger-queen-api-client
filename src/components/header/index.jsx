/* eslint-disable no-unused-vars */
import { RiLogoutBoxRLine } from "react-icons/ri";
import {GiHamburgerMenu} from "react-icons/gi";
import Logo from "../../assets/heisenburger.svg";
import { Button } from "../button";
import "./style.css";


export function Header({ className, onClick }){
  return (
    <header className={className}>
      <Button
        className="btn-menu-lateral"
      >
        <GiHamburgerMenu
          className="icon"
         />
      </Button>        
      <img
        className="image-heisenburger"
        src={Logo}
        alt="Logo heisenburger"
      />                 
      <Button
        className="btn-logout"
        onClick={onClick}
      >
        <RiLogoutBoxRLine className="icon" />
      </Button>
        
      
    </header>
  );
}
