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
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);

  const handleFilter = (option) => {
    getProduct()
      .then((response) => response.json())
      .then((data) => setProducts(dataFilter(data, option)));
  };

  const handleMenu = (e) => {
    handleFilter(e.target.value);
  };

  useEffect(() => {
    handleFilter("breakfast");
  }, []);


   useEffect(()=>{
     const sum = order.reduce((previousValue, product)=>{
       return previousValue + product.quantity * product.price;
     },0);
     setTotal(sum);
   },[order]);


  const handleAddProductOnCommand = (product) => {
    let newOrder = [...order];

    const productOnCommand = newOrder.find((item)=> item.id === product.id);

    if(productOnCommand){
      productOnCommand.quantity += 1;
    }else{
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        quantity: 1,
      };
      newOrder.push(newProduct);
    }
    setOrder(newOrder);
  };

  const handleRemoveProductOnCommand = (product) => {
    let newOrder = [...order];

    const productOnCommand = newOrder.find((item)=> item.id === product.id);

    if(productOnCommand.quantity > 1){
      productOnCommand.quantity -= 1;
    }
    else{
      newOrder = newOrder.filter((item)=> item.id !== product.id);
    }
    setOrder(newOrder);
  };

  // const handleInputSelectOnChange = (e) => {
  //   setClientTable({ clientTable: e.target.value });
  // };

  return (
    <>
      <section className="container-menu">
        <p className="menu-text">Cardapio</p>
        <article className="container-button">
          <Button
            onClick={handleMenu}
            value="breakfast"
            className="btn-menu"
          >Café da manhã
          </Button>
          <Button
            onClick={handleMenu}
            value="side"
            className="btn-menu"
          >
            Entrada
          </Button>
          <Button
            onClick={handleMenu}
            value="hamburguer"
            className="btn-menu"
          >
            Hamburgueres
          </Button>
          <Button
            onClick={handleMenu}
            value="drinks"
            className="btn-menu"
          >
            Bebidas
          </Button>
        </article>
        <ul className="card-products">
          {products.map((product) => {
              return (
                <li key={`products-${product.id}`}>
                  <Card
                  name = {product.name}
                  image = {product.image}
                  price = {product.price}
                  flavor = {product.flavor}
                  complement = {product.complement}
                  />
                  <Button
                  className="btn-adc-product"
                  onClick={() => handleAddProductOnCommand(product)}
                  >Adicionar
                  </Button>
                </li>
              );
            })}
        </ul>
        <ul>
          {order.map((product) => {
            return (
              <li key={`products-order-${product.id}`}>
                <Command
                  name= {product.name}
                  price= {product.price * product.quantity}
                  quantity= {product.quantity}
                />
                <Button
                  className="btn-adc-product"
                  onClick={() => handleRemoveProductOnCommand(product)}>
                    Remover
                </Button>
              </li>
            );
          })}
        </ul>
        <p>Valor total:R${total}</p>
      </section>
    </>
  );
};
