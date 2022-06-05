/* eslint-disable no-unused-vars */
import { RiLogoutBoxRLine } from "react-icons/ri";
import Logo from "../../assets/heisenburger.svg";
import { Button } from "../button";
import { Navbar } from "../../components/navbar";
import "./style.css";


export function Header({ onClick }){
  return (
    <header className="header-container">
      <Navbar /> 
      <div className="image-container">   
        <img
          className="image-heisenburger"
          src={Logo}
          alt="Logo heisenburger"
        /> 
      </div>   
      <div className="btn-logout-container">               
        <Button
          className="btn-logout"
          onClick={onClick}
        >
          <RiLogoutBoxRLine className="icon" />
        </Button>
        </div> 
      
    </header>
  );
}
