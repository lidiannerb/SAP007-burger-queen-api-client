/* eslint-disable no-unused-vars */
import "./style.css";
import { Button } from "../button";
import { getRole } from "../../services/token";

const CardOrder = ({
  id,
  client,
  table,
  status,
  createAt,
  preparationTime,
  products,
  onClick,
}) => {
  return (
    <ul className="items-order-container">
      <li className="itens-order-li">
        <p className="info-products-text">
          <small>Pedido nº:</small>
          {id}
        </p>
        <p className="info-products-text">
          <small>Cliente:</small>
          {client}
        </p>
        <p className="info-products-text">
          <small>Mesa:</small>
          {table}
        </p>
        <p className="info-products-text">
          <small>Status:</small>
          {status}
        </p>
        <p className="info-products-text">
          <small>Criação:</small>
          {createAt}
        </p>
        {preparationTime >= "0" ? (
          <p className="info-products-text">
            <small>Tempo de preparo:</small>
            {preparationTime}
          </p>
        ) : (
          ""
        )}
        <div className="li-buttons">
          {status === "pending" ? (
            <Button
              className="btn-card-order"
              value="preparing"
              onClick={onClick}
            >
              Preparar
            </Button>
          ) : (
            status === "preparing" && (
              <Button className="btn-card-order" value="done" onClick={onClick}>
                Concluir
              </Button>
            )
          )}
        </div>
        {(getRole() === "atendent") & (status !== "served") ? (
          <div className="li-buttons">
            <Button className="btn-card-order" value="served" onClick={onClick}>
              Servir
            </Button>
          </div>
        ) : (
          ""
        )}
      </li>

      <ul className="products-card-li">
        <p className="info-products-text">
          <small>Produtos:</small>
        </p>
        {products.map((productList) => {
          return (
            <div key={`productList-${productList.id}`}>
              <li>
                <p className="info-products-text">
                  <small>Quantidade:</small>
                  {productList.qtd}
                </p>
                <p className="info-products-text">
                  <small>nome:</small>
                  {productList.name}
                </p>
                {productList.flavor !== null ? (
                  <p className="info-products-text">
                    <small>Sabor:</small>
                    {productList.flavor}
                  </p>
                ) : (
                  ""
                )}
                {productList.complement !== null ? (
                  <p className="info-products-text">
                    <small>Complemento:</small>
                    {productList.complement}
                  </p>
                ) : (
                  ""
                )}
              </li>
            </div>
          );
        })}
      </ul>
    </ul>
  );
};

export default CardOrder;
