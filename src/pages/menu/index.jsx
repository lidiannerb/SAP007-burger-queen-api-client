import { getProduct } from "../../services/data";
import Header from "../../components/header";
import "./style.css";
import { useState } from "react";


export const Menu = () => {
    const [allProduct , setAllProduct] = useState([]);
    getProduct()
    .then((response) =>{ response.json()
        .then((data) => {
            setAllProduct(data);
        });
    });

    return <>
        <Header className="amarelo"  title="aparece"/>
        <ul>
            {allProduct.map((product)=>{
                return(
                    <li key={product.id}>
                        {product.name} {product.type}   
                    </li>
                );  
            })}
        </ul>
    </>;
};

