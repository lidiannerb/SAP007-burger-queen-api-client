import { Header } from "../../components/header";
import { removeToken } from "../../services/token";
import { useNavigate } from "react-router-dom";
import { getOrders, updateOrder } from "../../services/data";
import { useState, useEffect } from "react";
import { dataFilterOrdersDone } from "../../services/filters";
import { dateOrder, preparationTime } from "../../services/dateOrder";
import CardOrder from "../../components/cardOrder";

export const ReadyOrders = () => {

  const [ordersDone, setOrdersDone] = useState([]);
  const navigate = useNavigate();

  const handleLogout = () => {
    removeToken("token");
    navigate("/");
  };

  const filterOrderDone = () => {
    getOrders()
      .then((response) => response.json())
      .then((data) => {
        const filteredOrders = dataFilterOrdersDone(data, "done");
        const sortedOrders = filteredOrders.sort((a, b) => b.id - a.id);
        setOrdersDone(sortedOrders);       
      
      });
  };

  const handleUpdateStatus = (item) => {
    updateOrder(item.id, "served").then((response) => {
      let newOrdersDone = ordersDone;
      if (response.status === 200) {
        newOrdersDone = ordersDone.filter((element) => element.id !== item.id);
      }
      setOrdersDone(newOrdersDone);
    });
  };

  useEffect(() => {    
    filterOrderDone();
  }, []);  

  return (
    <>
      <Header
        onClick={handleLogout}
      >        
      </Header>

      <section>
        <ul className="all-orders">
          {ordersDone.map((item) => {
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
                onClick={() => handleUpdateStatus(item)}
              />
              </li>
            );
          })}
        </ul>
      </section>
    </>
  );
};

