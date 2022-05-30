import "./style.css";
export const Card = ({ image, price, name, flavor, complement }) => {
  return (
    <>
    <ul className="card">
      <li className="img-card">
        <p className='name-products'>{name}</p>
        <img className="img" src={image} alt="ItemCard " />
      </li>
      {
        flavor != null ?       
      <li> 
        <p className="flavor-products">Sabor:{flavor}</p>
      </li> 
      :""
      }
      { 
        complement != null ?
      <li>
        <p className="complement-products">Adicional:{complement}</p>
      </li>
      :""
      }
      <li>
        <p className="text-price">Preço: R${price}</p>
      </li>
    </ul>
    </>
  );
};
