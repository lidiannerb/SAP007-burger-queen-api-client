import "./style.css";
import { Footer } from "../footer";
import heisenburger from "../../assets/heisenburger.svg";

export const LayoutForm = (props) => {
  return(
    <section className="container">      
        <div className="container-form">
          <div className="container-logo-heisenburger">
            <img className="image-heisenburger" src={heisenburger} alt="Logo heisenburger"/>
          </div>
          <div className="wrap-form">            
            {props.children}
          </div>
        </div>
        <Footer/>
    </section>
  );
};
