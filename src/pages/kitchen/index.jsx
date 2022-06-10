import { useState, useEffect } from "react";
import { Header } from "../../components/header";
import { removeToken } from "../../services/token";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../services/data";
import CardOrder from "../../components/cardOrder";
import { dateOrder } from "../../services/dateOrder";

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
  },[]);


  return (
    <>
      <section>
        <Header 
        onClick={handleLogout}
        />
      </section>
      <section>
        <ul className="all-orders" >
          {order.map((item) => {
            return (
              <li className="li-all-orders" key={`item-${item.id}`}> 
                <CardOrder 
                  id={item.id}
                  client={item.client_name}
                  table={item.table}
                  status={item.status}
                  createAt={dateOrder(item.createdAt)}
                  updateAt={item.updatedAt}
                  products={item.Products}
                />
              </li>

            );
          })}

        </ul>
      </section>
    </>
  );
};