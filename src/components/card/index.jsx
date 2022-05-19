import "./style.css";
export const Card = ({ image, price }) => {
  return (
    <ul className="card">
      <li className="img-card">
        <img className="img" src={image} alt="ItemCard " />
      </li>
      <li>
        <p className="text-price">Preço: R${price}</p>
      </li>
    </ul>
  );
};
