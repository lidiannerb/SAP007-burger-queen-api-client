/* eslint-disable no-undef */
import { useEffect, useState } from "react";
import "./style.css";
// import SelectTable from "../../components/SelectTable";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { getProduct } from "../../services/data";
import { dataFilter } from "../../services/filters";
import { Command } from "../../components/comand";

export const Menu = () => {
  const [products, setProducts] = useState([]);
  // const [clientTable, setClientTable] = useState({ clientTable: "" });
  const [command, setCommand] = useState([]);

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

  const handleAddProductOnCommand = (product) => {
    console.log(product);
    const newProduct = {
      id: product.id,
      name: product.name,
      price: product.price,
    };
    command.push(newProduct);
    setCommand([...command]);
  };

  console.log(handleAddProductOnCommand());

  // const handleInputSelectOnChange = (e) => {
  //   setClientTable({ clientTable: e.target.value });
  // };

  return (   
    <>
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
          {products.map((product) => {
              return (     
                <div key={product.id}>           
                  <Card 
                  name = {product.name}
                  image = {product.image}
                  price = {product.price}                
                  />                
                  <Button 
                  btnClass="btn-adc-product"
                  btnOnclick={() => handleAddProductOnCommand(product)} 
                  btnText="Adicionar"
                  />
                </div>
              );
            })}
        </ul>
        <ul>
          {command.map((product) => {
            return (
              <li key={product.id}>
                <Command 
                  nameProduct={product.name}
                  priceProduct={product.price}
                  // quantityProduct={product.quantity}
                />
              </li>
            );
          })}          
        </ul>
      </section>
    </>
  );
};
