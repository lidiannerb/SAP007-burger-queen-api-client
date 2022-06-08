import "./style.css";
import { Card } from "../../components/card";

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
        Produtos:
           {products.map((productList)=> {
            return (
              <div key={`productList-${productList.id}`}>                
                <Card
                name={productList.name}
                flavor={productList.flavor}
                qtd={productList.qtd}
                complement={productList.complement}
                >
                </Card>
              </div>
            );
           })}
        </li>      
    </ul>
  </> );
};
 
export default CardOrder;