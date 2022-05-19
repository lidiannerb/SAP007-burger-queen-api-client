import { useState } from "react";
import "./style.css";
import {Header} from "../../components/header";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { getProduct } from "../../services/data";
import { dataFilter } from "../../services/filters";

export const Menu = () => {
  const [products, setProducts] = useState([]);

  const handleMenu = (e) => {
    getProduct()
      .then((response) => response.json())
      .then((data) => setProducts(dataFilter(data, e.target.value)));
  };

  return (
    <>
      <Header className="amarelo" title="aparece" />

      <section className="container-menu">
        <p className="menu-text">Cardapio</p>
        <article className="container-button">
          <Button
            btnOnclick={handleMenu}
            btnValue="breakfast"
            btnText="Café da manhã"
            btnClass="btn-menu"
          />
          <Button
            btnOnclick={handleMenu}
            btnValue="all-day"
            btnText="Almoço e jantar"
            btnClass="btn-menu"
          />
        </article>
        <ul className="card-products">
          {products.map((product, index) => {
              return <Card key={index}
              image = {product.image}
              price = {product.price}
              />;
          })}
        </ul>
      </section>

    </>
  );
};
