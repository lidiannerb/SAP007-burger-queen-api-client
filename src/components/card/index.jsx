import "./style.css";
export const Card = ({ image, price, name, flavor, complement }) => {
  return (
    <>
    <ul className="card">
      <li className="img-card">
        <p className='name-products'>{name}</p>
        <img className="img" src={image} alt="ItemCard " />
      </li>
      <li>
        <p className='flavor-products'>{flavor}</p>
        <p className='complement-products'>{complement}</p>
        <p className="text-price">Preço: R${price}</p>
      </li>
    </ul>
    </>
  );
};
