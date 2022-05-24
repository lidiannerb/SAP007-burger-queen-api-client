import "./style.css";
import { Footer } from "../footer";
export const LayoutForm = (props) => {
  return(
    <section className="container">
        <div className="container-form">
          <div className="wrap-form">
              {props.children}

          </div>
        </div>
        <Footer/>
    </section>
  );
};
