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
        <li>
          <p className="info-products">Pedido nº{id}</p>
          <p className="info-products">Cliente: {client}</p>
          <p className="info-products">Mesa: {table}</p>
          <p className="info-products">Status: {status}</p>
          <p className="info-products">Criação:{createAt}</p>
          <p className="info-products">Tempo de preparo:{preparationTime}</p>
        </li>

        <li className="products-card-li">
          Produtos:
          {products.map((productList) => {
            return (
              <div key={`productList-${productList.id}`}>
                <Card
                  qtd={productList.qtd}
                  name={productList.name}
                  flavor={productList.flavor}                  
                  complement={productList.complement}
                ></Card>
              </div>
            );
          })}
        </li>
        <li>
          {status === "pending" ? (
          <Button
            className="btn-card-order"  
            value="preparing"
            onClick={onClick}
          >  
            Preparar
          </Button> ) : ( status === "preparing" &&
          <Button
            className="btn-card-order"  
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
            className="btn-card-order"           
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
