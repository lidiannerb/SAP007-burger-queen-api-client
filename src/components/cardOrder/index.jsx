import "./style.css";
import { Card } from "../../components/card";

const CardOrder = ({
  id,
  client,
  table,
  status,
  createAt,
  updateAt,
  processedAt,
  products,
}) => {
  return (
    <>
      <ul className="items-order-container">
        <li className="info-products">
          <p>Pedido nº{id}</p>
          <p>
            Cliente: {client}
            Mesa: {table}
          </p>
        </li>
        <li className="info-products">Status: {status}</li>
        <li className="info-products">Criação:{createAt}</li>
        <li className="info-products">
          Processado:{processedAt}
          Atualização:{updateAt}
        </li>
        <li className="info-products">
          Produtos:
          {products.map((productList) => {
            return (
              <div key={`productList-${productList.id}`}>
                <Card
                  name={productList.name}
                  flavor={productList.flavor}
                  qtd={productList.qtd}
                  complement={productList.complement}
                ></Card>
              </div>
            );
          })}
        </li>
      </ul>
    </>
  );
};

export default CardOrder;
