import "./style.css";
import { IoRemoveCircleOutline, IoAddCircle } from "react-icons/io5";
import { Button } from "../button";

export const Command = ({ name, price, qtd, onclick, onClick }) => {
  return (
    <ul className="command">
      <li>
        <p className="info-products">{qtd}</p>
      </li>
      <li>
        <p className="info-products">{name}</p>
      </li>
      <li btn-add-card>
        <Button className="btn-add-product" onClick={onclick}>
          <IoAddCircle className="icon-command-add" />
        </Button>
      </li>
      <li>
        <p className="info-products">R$ {price},00</p>
      </li>
      <li className="btn-remove-card">
        <Button className="btn-remove-product" onClick={onClick}>
          <IoRemoveCircleOutline className="icon-command-remove" />
        </Button>
      </li>
    </ul>
  );
};
