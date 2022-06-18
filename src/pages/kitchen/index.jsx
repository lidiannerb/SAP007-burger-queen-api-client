import { useState, useEffect } from "react";
import { Header } from "../../components/header";
// import { Button } from "../../components/button";
import { removeToken } from "../../services/token";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../services/data";
import CardOrder from "../../components/cardOrder";
import { dateOrder, preparationTime } from "../../services/dateOrder";
import { dataFilterOrder } from "../../services/filters";
import { updateOrder } from "../../services/data";

import "./style.css";

export const Kitchen = () => {
  const [order, setOrder] = useState([]);

  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken("token");
    navigate("/");
  };

  function filterOrder() {
    getOrders()
      .then((response) => response.json())
      .then((data) => {
        const filterDone = dataFilterOrder(data, "done");
        const filterServed = dataFilterOrder(filterDone, "served");

        setOrder(filterServed);
      });
  }
  useEffect(() => {
    filterOrder();
  }, []);

  useEffect(() => {
    console.log(order);
  }, [order]);

 
  const handleUpdateStatus = (item, e) => {
    updateOrder(item.id, e.target.value).then((response) => {
      if (response.status === 200) {
        const resultResponse = order.map((element) => {
          if (element.id === item.id) {
            element.status = e.target.value;
          }
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
      <section className="section-all-orders">
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
                  preparationTime={preparationTime(
                    item.createdAt,
                    item.processedAt
                  )}
                  products={item.Products} 
                  onClick={(e) => handleUpdateStatus(item, e)}                 
                />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};
