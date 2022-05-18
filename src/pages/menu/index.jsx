import { getProduct } from "../../services/data";
import Header from "../../components/header";
import { Button } from "../../components/button";
import "./style.css";
import { useState } from "react";
import { Card } from "../../components/card";

export const Menu = () => {
  const [products, setProducts] = useState([]);

  const filterMenu = (data, type) => {
    return data.filter((element) => element.type === type);
  };

  const handleMenu = (e) => {
    getProduct()
      .then((response) => response.json())

      .then((data) => setProducts(filterMenu(data, e.target.value)));
  };

  return (
    <>
      <Header className="amarelo" title="aparece" />
      <Button
        btnOnclick={handleMenu}
        btnValue="breakfast"
        btnText="Café da manhã"
      />
      <Button
        btnOnclick={handleMenu}
        btnValue="all-day"
        btnText="Almoço e jantar"
      />
      <ul>
        {products.map((product, index) => {
            return <Card key={index} 
            image = {product.image}   
            price = {product.price}          
            />;
        })}
      </ul>
    </>
  );
};
