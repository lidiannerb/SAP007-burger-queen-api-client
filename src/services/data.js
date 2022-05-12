const URL = "https://lab-api-bq.herokuapp.com/users";

export const createUser = (name, email, password, role) => {
return fetch(`${URL}`, {
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