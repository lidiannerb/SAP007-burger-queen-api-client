/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./style.css";
import {SelectTable} from "../../components/SelectTable";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { getProduct } from "../../services/data";
import { dataFilter } from "../../services/filters";
import { Command } from "../../components/comand";
import { Header } from "../../components/header";
import { Input } from "../../components/inputs";
import { sendOrder} from "../../services/data";
import { removeToken } from "../../services/token";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const [products, setProducts] = useState([]);
  const [table, setTable] = useState("");
  const [client, setClient] = useState(""); 
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [dataOrder, setDataOrder] = useState([]);
  const navigate = useNavigate();


  const handleLogout = (e) => {
    removeToken("token");
    navigate("/");
  };

  const handleFilter = (option) => {
    getProduct()
      .then((response) => response.json())
      .then((data) => setProducts(dataFilter(data, option)));
  };

  const handleMenu = (e) => {
    handleFilter(e.target.value);
  };

  const handleAddProductOnCommand = (product) => {
    let newOrder = [...order];

    const productOnCommand = newOrder.find((item) => item.id === product.id);

    if (productOnCommand) {
      productOnCommand.qtd += 1;
    } else {
      const newProduct = {
        id: product.id,
        name: product.name,
        price: product.price,
        qtd: 1,
      };
      newOrder.push(newProduct);
    }
    setOrder(newOrder);
  };

  const handleRemoveProductOnCommand = (product) => {
    let newOrder = [...order];

    const productOnCommand = newOrder.find((item) => item.id === product.id);

    if (productOnCommand.qtd > 1) {
      productOnCommand.qtd -= 1;
    } else {
      newOrder = newOrder.filter((item) => item.id !== product.id);
    }
    setOrder(newOrder);
  };

  const handleSelectTable = (e) => {
    setTable(e.target.value);    
  };
  
  const handleSendOrder = (e) => {
    sendOrder(client, table, order)
      .then((response) => response.json())
      .then((data) => {
        setDataOrder(data);      
      });  
      console.log([dataOrder]);
  };   

  useEffect(() => {
    handleFilter("breakfast");
  }, []);

  useEffect(() => {
    console.log(client);
  }, [client]);

  useEffect(() => {
    console.log(table);
  }, [table]);

  useEffect(() => {
    const sum = order.reduce((previousValue, product) => {
      return previousValue + product.qtd * product.price;
    }, 0);
    setTotal(sum);
  }, [order]);


  return (
    <>
      <section className="container-menu">
        <Header
          onClick={handleLogout}        
        >                 
        </Header>
        <p className="menu-text">Cardapio</p>
        <article className="container-button">
          <Button onClick={handleMenu} value="breakfast" className="btn-menu">
            Café da manhã
          </Button>
          <Button onClick={handleMenu} value="side" className="btn-menu">
            Entrada
          </Button>
          <Button onClick={handleMenu} value="hamburguer" className="btn-menu">
            Hamburgueres
          </Button>
          <Button onClick={handleMenu} value="drinks" className="btn-menu">
            Bebidas
          </Button>
        </article>
        <ul className="card-products">
          {products.map((product) => {
            return (
              <li key={`products-${product.id}`}>
                <Card
                  name={product.name}
                  image={product.image}
                  price={product.price}
                  flavor={product.flavor}
                  complement={product.complement}
                />
                <Button
                  className="btn-adc-product"
                  onClick={() => handleAddProductOnCommand(product)}
                >
                  Adicionar
                </Button>
              </li>
            );
          })}
        </ul>
        <ul>
          <li>
            <label>Cliente</label>
            <Input
              type="text"
              value={client}
              onChange={(e) => setClient(e.target.value)}
            />
          </li>
          <li>
            <SelectTable
              className="btn-select-table"
              onChange={handleSelectTable}
            />
          </li>
          {order.map((product) => {
            return (
              <li key={`products-order-${product.id}`}>
                <Command
                  name={product.name}
                  price={product.price * product.qtd}
                  qtd={product.qtd}
                  onClick={() => handleRemoveProductOnCommand(product)}
                />
              </li>
            );
          })}
        </ul>
        {total != 0 ? <p>Valor total:R${total}</p> : ""}
        <Button
          type="button"
          onClick={handleSendOrder}
        >
          Enviar Pedido
        </Button>
      </section>
    </>
  );
};
