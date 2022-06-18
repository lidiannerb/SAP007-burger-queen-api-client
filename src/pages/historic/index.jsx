import { Header } from "../../components/header";
import { removeToken } from "../../services/token";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../services/data";
import { useState, useEffect } from "react";
import { dataFilterOrdersDone } from "../../services/filters";
import { dateOrder, preparationTime } from "../../services/dateOrder";
import CardOrder from "../../components/cardOrder";
import "./style.css";

export const Historic = () => {

  const [ordersServed, setOrdersServed] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken("token");
    navigate("/");
  };

  const filterOrderServed = () => {
    getOrders()
      .then((response) => response.json())
      .then((data) => {
        const filteredOrders = dataFilterOrdersDone(data, "served");
        const sortedOrders = filteredOrders.sort((a, b) => b.id - a.id);
        setOrdersServed(sortedOrders);       
      
      });
  };

  useEffect(() => {    
    filterOrderServed();
  }, []);  

  return (
    <>
      <Header
        onClick={handleLogout}
      >        
      </Header>
      <h1 className="title-pages">Histórico de Pedidos Servidos</h1>
      <section>
        <ul className="all-orders">
          {ordersServed.map((item) => {
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
                item.processedAt)}
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
