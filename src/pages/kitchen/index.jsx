import { useState, useEffect } from "react";
import { Header } from "../../components/header";
import { removeToken } from "../../services/token";
import { useNavigate } from "react-router-dom";
import { getOrders } from "../../services/data";
import CardOrder from "../../components/cardOrder";

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


//   const receivingOrders = () => {
//     getOrders()
//     .then((response) => {
//       if (response.status === 200) {
//         return response.json();
//       }
//     setErrorCode(codeErrorMenu(response));
//     })
//     .then((data) => setOrder(data));
// };
//   console.log(receivingOrders);

  return (
    <>
      <section>
        <Header 
        onClick={handleLogout}
        />
      </section>
      <section>
        <ul>
          {order.map((item) => {
            return (
              <li key={`item-${item.id}`}> 
                <CardOrder 
                  id={item.id}
                  client={item.client_name}
                  table={item.table}
                  status={item.status}
                  createAt={item.createdAt}
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