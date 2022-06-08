import "./style.css";


const CardOrder = ({id, client, table, status, createAt, updateAt, products }) => {
  return ( 
  <>
    <ul className="items-order-container">
      <li>
        <p>
          Pedido nº{id}
        </p>
        <p>
          Cliente: {client}
          Mesa: {table}
        </p>
      </li>
      <li>
        Status: {status}
      </li>
      <li>
        Criação:{createAt}
      </li>
      <li>
        Atualização:{updateAt}
      </li>
      <li>
        Produtos:{products}
      </li>
    </ul>
  </> );
};
 
export default CardOrder;