import { Header } from "../../components/header";
import { removeToken } from "../../services/token";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../services/data";
import { useState, useEffect } from "react";
// import { dataFilterOrdersDone } from "../../services/filters";
import { dateOrder, preparationTime } from "../../services/dateOrder";
import CardOrder from "../../components/cardOrder";

export const ReadyOrders = () => {

  const [ordersDone, setOrdersDone] = useState();
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken("token");
    navigate("/");
  };

  function filterOrderDone() {
    getOrders()
      .then((response) => response.json())
      .then((data) => setOrdersDone(data));
  }
  useEffect(() => {    
    filterOrderDone();
  }, []);  

  useEffect(() => {
    ordersDone;
  }, []);

  return (
    <>
      <Header
      onClick={handleLogout}
      ></Header>

      <section>
        <ul>
          {ordersDone.map((item) => {
            return (
              <li key={item.id}>              
              <CardOrder
                client={item.client_name}
                table={item.table}
                status={item.status}
                createAt={dateOrder(item.createdAt)}
                //updateAt={dateOrder(item.updatedAt)}
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

