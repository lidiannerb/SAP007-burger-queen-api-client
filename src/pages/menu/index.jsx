/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import "./style.css";
import { SelectTable } from "../../components/SelectTable";
import { Button } from "../../components/button";
import { Card } from "../../components/card";
import { getProduct } from "../../services/data";
import { dataFilter } from "../../services/filters";
import { Command } from "../../components/comand";
import { Header } from "../../components/header";
import { Input } from "../../components/inputs";
import { sendOrder } from "../../services/data";
import { codeErrorMenu } from "../../services/errors";
import { removeToken } from "../../services/token";
import { useNavigate } from "react-router-dom";
import ErrorMessages from "../../components/errorMessages";

export const Menu = () => {
  const [products, setProducts] = useState([]);
  const [table, setTable] = useState("");
  const [client, setClient] = useState("");
  const [order, setOrder] = useState([]);
  const [total, setTotal] = useState(0);
  const [errorCode, setErrorCode] = useState("");
  const navigate = useNavigate();
  const [buttonMenuStatus, setButtonMenuStatus] = useState({
    breakfast: true,
    side: false,
    drinks: false,
    hamburguer: false,
  });

  const handleLogout = () => {
    removeToken("token");
    navigate("/");
  };

  const handleFilter = (option) => {
    getProduct()
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setErrorCode(codeErrorMenu(response));
      })
      .then((data) => setProducts(dataFilter(data, option)));
  };

  const handleMenu = (e) => {
    const value = e.target.value;
    handleFilter(value);
    const newStatus = {
      breakfast: false,
      side: false,
      drinks: false,
      hamburguer: false,
    };
    newStatus[value] = true;
    setButtonMenuStatus(newStatus);    
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
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setErrorCode(codeErrorMenu(response));
        hideError();
      })
      .then(() => {
        setOrder([]);
        setTable("");
        setClient("");
      });
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

  function hideError() {
    setTimeout(() => {
      setErrorCode("");
    }, 5000);
  }

  return (
    <>
      <section className="container-saloon">
        <Header onClick={handleLogout}></Header>
        <aside className="container-button">
          <Button
            onClick={handleMenu}
            value="breakfast"
            className={`btn-menu ${
              buttonMenuStatus.breakfast && "active-filter"
            }`}
          >
            Café da manhã
          </Button>
          <Button
            onClick={handleMenu}
            value="side"
            className={`btn-menu ${buttonMenuStatus.side && "active-filter"}`}
          >
            Entrada
          </Button>
          <Button
            onClick={handleMenu}
            value="hamburguer"
            className={`btn-menu ${
              buttonMenuStatus.hamburguer && "active-filter"
            }`}
          >
            Hamburgueres
          </Button>
          <Button
            onClick={handleMenu}
            value="drinks"
            className={`btn-menu ${buttonMenuStatus.drinks && "active-filter"}`}
          >
            Bebidas
          </Button>
        </aside>
        <section className="container-menu">
          <section className="show-menu">
            <article className="card-products-container">
              <ul className="card-products">
                {products.map((product) => {
                  return (
                    <li
                      className="card-container"
                      key={`products-${product.id}`}
                    >
                      <Card
                        name={product.name}
                        image={product.image}
                        price={product.price}
                        flavor={product.flavor}
                        complement={product.complement}
                        onClick={() => handleAddProductOnCommand(product)}
                      />
                    </li>
                  );
                })}
              </ul>
            </article>
          </section>
          <section className="command-container">
            <ul className="command-ul">
              <li className="command-input">
                <Input
                  className="input-name-client"
                  type="text"
                  value={client}
                  onChange={(e) => setClient(e.target.value)}
                />
                <label className="label">Cliente</label>
              </li>
              <li className="command-select">
                <SelectTable
                  className="btn-select-table"
                  onChange={handleSelectTable}
                  value={table}
                />
                <label className="label">Mesa</label>
              </li>
              <li className="command-total">
                <p className="text-price-command">R${total},00</p>
                <p className="label">Total a pagar</p>
              </li>
            </ul>
            <article className="article-container-command">
              <ul className="command-ul-card">
                {order.map((product) => {
                  return (
                    <li
                      className="li-products"
                      key={`products-order-${product.id}`}
                    >
                      <Command
                        qtd={product.qtd}
                        name={product.name}
                        price={product.price * product.qtd}
                        onclick={() => handleAddProductOnCommand(product)}
                        onClick={() => handleRemoveProductOnCommand(product)}
                      />
                    </li>
                  );
                })}
              </ul>
              <aside className="aside-container-btn">
                <ErrorMessages
                  disable={errorCode ? false : true}
                  errorMessages={errorCode}
                />
                <Button
                  className="btn-send-order"
                  type="button"
                  onClick={handleSendOrder}
                >
                  Enviar Pedido
                </Button>
              </aside>
            </article>
          </section>
        </section>
      </section>
    </>
  );
};
