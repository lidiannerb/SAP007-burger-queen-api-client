import "./style.css";
import { Footer } from "../footer";
import heisenburger from "../../assets/heisenburger.svg";

export const LayoutForm = ({ children }) => {
  return (
    <section className="container">
      <div className="container-form">
        <div className="container-logo-heisenburger">
          <img
            className="image-heisenburger"
            src={heisenburger}
            alt="Logo heisenburger"
          />
        </div>
        <div className="wrap-form">{children}</div>
      </div>
      <Footer />
    </section>
  );
};
