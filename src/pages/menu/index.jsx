import { useEffect, useState } from "react";
import "./style.css";
import SelectTable from "../../components/SelectTable";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import ButtonInsertProducts from "../../components/buttonInsertProducts";
import { getProduct } from "../../services/data";
import { dataFilter } from "../../services/filters";

export const Menu = () => {
  const [products, setProducts] = useState([]);
  const [clientTable, setClientTable] = useState({ clientTable: "" });

  const handleFilter = (option) => {
    getProduct()
      .then((response) => response.json())
      .then((data) => setProducts(dataFilter(data, option)));
  };

  const handleMenu = (e) => {
    handleFilter(e.target.value);
  };

  useEffect(() => {
    handleFilter("all-day");
  }, []);

  const handleInputSelectOnChange = (e) => {
    setClientTable({ clientTable: e.target.value });
  };

  return (   
    <>
      <SelectTable
        value={clientTable.clientTable}
        onChange={(e) => handleInputSelectOnChange(e)}
      />

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
              return (     
                <div key={index}>           
                  <Card 
                  name = {product.name}
                  image = {product.image}
                  price = {product.price}                
                  />
                  <ButtonInsertProducts />
                </div>
              );
            })}
        </ul>
      </section>
    </>
  );
};
