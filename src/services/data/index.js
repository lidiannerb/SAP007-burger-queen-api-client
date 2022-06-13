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
      restaurant: "heisenburger",
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
        "Authorization": getToken()
      }
  });
};

export const sendOrder = (client, table, products) => {
  return fetch(`${URL}/orders`,{
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken()
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
  });
};

export const updateOrder = (id, status) => {
  return fetch(`${URL}/orders/${id}` , {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken(),
    },
    body: JSON.stringify({
      status: status
    })
  });
};

export const deleteOrder = (orderId) => {
  return fetch(`${URL}/orders/${orderId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      "Authorization": getToken(),
    },
  });
};
