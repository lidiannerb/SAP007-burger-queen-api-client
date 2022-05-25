export const Command = ({id, name, price, quantity }) => {
  return (
    <ul className="card">
    <li className="img-card">
      <p>{id}</p>
      <p className='name-products'>{name}</p>
    </li>
    <li>
      <p className="text-price">Preço: R${price}</p>
      <p className="text-price">{quantity}</p>
    </li>
  </ul>
  );
};
