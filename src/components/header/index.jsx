/* eslint-disable no-unused-vars */
import { RiLogoutBoxRLine } from "react-icons/ri";
import Logo from "../../assets/heisenburger.svg";
import { Button } from "../button";
import "./style.css";

export function Header({ className, onClick }){
  return (
    <header className={className}>
      <ul className="header-container-ul">
        <li className="image-heisenburger-container">
          <img
            className="image-heisenburger"
            src={Logo}
            alt="Logo heisenburger"
          />
        </li>
        <li className="btn-logout-container">            
          <Button
            className="btn-logout"
            onClick={onClick}
          >
            <RiLogoutBoxRLine className="icon" />
          </Button>
        </li>
      </ul>
    </header>
  );
}
