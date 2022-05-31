import {Button} from "../button";


export const Command = ({id, name, price, qtd, onClick }) => {
  return (
    <ul className="card">
    <li className="img-card">
      <p>{id}</p>
      <p className='name-products'>{name}</p>
    </li>
    <li>
      <p className="text-price">Preço: R${price}</p>
      <p className="text-price">{qtd}</p>
    </li>
    <li>
      <Button
        className="btn-adc-product"
        onClick={onClick}              
      >
        Remover
      </Button>
    </li>
  </ul>
  );
};
