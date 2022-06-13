import { useState, useEffect } from "react";
import { Header } from "../../components/header";
import { Button } from "../../components/button";
import { removeToken } from "../../services/token";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../services/data";
import CardOrder from "../../components/cardOrder";
import { dateOrder } from "../../services/dateOrder";
import { updateOrder } from "../../services/data";

import "./style.css";

export const Kitchen = () => {
  const [order, setOrder] = useState([]);

  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken("token");
    navigate("/");
  };

  useEffect(() => {
    getOrders()
      .then((response) => response.json())
      .then((data) => setOrder(data));
  }, []);

  useEffect(() => {
    console.log(order);
  },[order]);

  const handleUpdateStatus = (item, e) => {
    updateOrder(item.id, e.status)
    .then((response) => {
      if (response.status === 200) {
        const resultResponse = order.map((element) => {
          if (element.id === item.id) {
            element.status = e.target.value;
            console.log(e.target.value);
          }
          console.log(element);
          return element;
        });
        setOrder(resultResponse);
      }
    });
  };

  return (
    <>
      <section>
        <Header onClick={handleLogout} />
      </section>
      <section>
        <ul className="all-orders">
          {order.map((item) => {
            return (
              <li className="li-all-orders" key={`item-${item.id}`}>
                <CardOrder
                  id={item.id}
                  client={item.client_name}
                  table={item.table}
                  status={item.status}
                  createAt={dateOrder(item.createdAt)}
                  updateAt={dateOrder(item.updatedAt)}
                  processedAt={dateOrder(item.processedAt)}
                  products={item.Products}
                />
                {item.status === "pending" ?                 
                <Button onClick={(e) => handleUpdateStatus(item, e)} value="preparing">
                  Preparar
                </Button> : item.status === "preparing" && <Button onClick={(e) => handleUpdateStatus(item, e)} value="done">
                  Pronto
                </Button>
                }
                
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
