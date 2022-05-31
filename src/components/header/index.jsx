/* eslint-disable no-unused-vars */
import { RiLogoutBoxRLine } from "react-icons/ri";
import Logo from "../../assets/heisenburger.svg";
import { Button } from "../button";
import "./style.css";

export function Header({ className, children, onClick }){
  return (
    <header className={className}>
      <nav>
        <ul>
          <li>
            <img
              className="image-heisenburger"
              src={Logo}
              alt="Logo heisenburger"
            />
          </li>
          <li>            
            <Button
              onClick={onClick}
            >
              <RiLogoutBoxRLine className="icon" />
            </Button>
          </li>
          <li> {children}</li>
        </ul>
      </nav>
    </header>
  );
}
