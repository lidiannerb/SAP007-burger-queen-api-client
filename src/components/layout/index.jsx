import "./style.css";

export const LayoutForm = (props) => {
  return(
    <section className="container">
        <div className="container-form">
          <div className="wrap-form">
              {props.children}

          </div>
        </div>
    </section>
  );
};
