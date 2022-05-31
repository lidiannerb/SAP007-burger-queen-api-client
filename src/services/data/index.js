import { getToken } from "../token";
const URL = "https://lab-api-bq.herokuapp.com";

export const createUser = (name, email, password, role) => {
return fetch(`${URL}/users`, {
  method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  
    body: JSON.stringify({
      name: name,
      email: email,
      password: password,
      role: role,
      restaurant: "restaurant 123",
    })
});
};

export const userLogin = (email, password) => {
  return fetch(`${URL}/auth`,{
    method: "POST",
      headers: {
        "Content-Type": "application/json",
      },

      body: JSON.stringify({
        email: email,
        password: password,
      })
  });
};

export const getProduct = () => {
  return fetch(`${URL}/products`,{
    method: "GET",
      headers: {
        "Content-Type": "application/json",
        "Authorization": getToken("token")
      }
  });
};

export const sendOrder = (client, table, products) => {
  return fetch(`${URL}/orders`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken("token")
    },
    body: JSON.stringify({
      client: client,
      table: table,
      products: products,  
    })
  });
};

export const getOrders = () => {
  return fetch(`${URL}/orders` , {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken()
    },
  }).then((res) => res.json());
};

// export const updateOrderStatus = (id, status) => {
//   id = id.toString();
//   return fetch(`${URL}/orders` ${id}, {
//     method: "PUT",
//     headers: {
//       "Content-Type": "application/json",
//       "Authorization": getToken(),
//     },
//     body: JSON.stringify({
//       status
//     })
//   }).then((res) => res.json());
// };