/* eslint-disable no-unused-vars */
import { RiLogoutBoxRLine } from "react-icons/ri";
import Logo from "../../assets/heisenburger.svg";
import "./style.css";

export function Header({ className, children }) {
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
            <RiLogoutBoxRLine className="icon" />
          </li>
          <li> {children}</li>
        </ul>
      </nav>
    </header>
  );
}
