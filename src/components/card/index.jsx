import "./style.css";
import { Button } from "../button";

export const Card = ({ image, price, name, flavor, complement, onClick }) => {
  return (
    <>
    <ul className="card">
      <li className="img-card">        
        <img className="img" src={image} alt="ItemCard " />
      </li>
      <li>
        <p className="info-products">{name}</p>
      </li>  
      {
        flavor != null ?     
      <li> 
        <p className="info-products">Sabor:{flavor}</p>
      </li> 
      :""
      }
      { 
        complement != null ?
      <li>
        <p className="info-products">Adicional:{complement}</p>
      </li>
      :""
      }
      <li>
        <p className="info-products">Preço: R${price}</p>
      </li>
      <li>
      <Button
        className="btn-adc-product"
        onClick= {onClick}  
      >
         +
      </Button>    
      </li>
    </ul>
    </>
  );
};
