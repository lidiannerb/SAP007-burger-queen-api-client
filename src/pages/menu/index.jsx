import { getProduct } from "../../services/data";
import Header from "../../components/header";


export const Menu = () => {
    getProduct()
    .then((response) =>{ response.json()
        .then((data) => {
            console.log(data, "teste");
        });
    });




    return <>
        <Header className={"amarelo"}  title={"aparece"}/>

    
    </>;










};