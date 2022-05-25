import "./style.css";
export const Button = ({ id, type, className , onClick , children, value }) => {
    return(
        <button
        id={id}
        type={type}
        className={className}
        onClick={onClick}
        value={value}
        >
            {children}
        </button>

    );
};
