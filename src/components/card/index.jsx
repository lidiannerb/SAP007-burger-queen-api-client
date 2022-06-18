import "./style.css";
import { IoAddCircle } from "react-icons/io5";
import { Button } from "../button";

export const Card = ({ image, price, name, qtd, flavor, complement, onClick }) => {
  return (
    <>
      <ul className="card">
        {image && (
          <li className="img-card">
          <img className="img" src={image} alt="ItemCard " />
        </li>
        )} 
        <li className="name-card">
          {qtd && (<li className="price-card">
            <p className="info-products">{qtd}</p>
          </li>)}
          <p className="info-products">{name}</p>
        </li>
        {flavor != null ? (
          <li className="flavor-card">
            <p className="info-products">Sabor:{flavor}</p>
          </li>
        ) : (
          ""
        )}

        {complement != null ? (
          <li className="complement-card">
            <p className="info-products">Adicional:{complement}</p>
          </li>
        ) : (
          ""
        )}
        {price && (<li className="price-card">
          <p className="info-products">Preço: R${price}</p>
        </li>)}



        {onClick && (<li className="btn-card">
          <Button className="btn-add-product" onClick={onClick}>
            <IoAddCircle className="icon-card-add" />
          </Button>
        </li>)}
      </ul>
    </>
  );
};
