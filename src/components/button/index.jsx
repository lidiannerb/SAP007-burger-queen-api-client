import "./style.css";
export const Button = ({ btnId, btnType, btnClass , btnOnclick , btnText, btnValue }) => {
    return(
        <button
        id={btnId}
        type={btnType}
        className={btnClass}
        onClick={btnOnclick}
        value={btnValue}
        >
            {btnText}
        </button>

    );
};