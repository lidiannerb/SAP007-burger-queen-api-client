/* eslint-disable no-unused-vars */
import "./style.css";
import { Card } from "../../components/card";
import { Button } from "../button";
import { getRole } from "../../services/token";

const CardOrder = ({
  id,
  client,
  table,
  status,
  createAt,
  updateAt,
  processedAt,
  preparationTime,
  products,
  onClick,
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
          {/* Processado:{processedAt} */}
          Tempo de preparo:{preparationTime}
          {/* Atualização:{updateAt} */}
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
        <li>
          {status === "pending" ? (
          <Button
            value="preparing"
            onClick={onClick}
          >  
            Preparar
          </Button> ) : ( status === "preparing" &&
          <Button
            value="done"
            onClick={onClick}
          >
            Pronto
          </Button>
          )}
        </li>
        {getRole() === "atendent" ?   
        <li>
          <Button            
            value="served"
            onClick={onClick}
          >
            Servir
          </Button>
        </li> : ""}
      </ul>
    </>
  );
};

export default CardOrder;
