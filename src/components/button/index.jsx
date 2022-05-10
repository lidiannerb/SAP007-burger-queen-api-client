export const Button = ({ btnId, btnType, btnClass , btnOnclick , btnText }) => {
    return(
        <button
        id={btnId}
        type={btnType}
        className={btnClass}
        onClick={btnOnclick}
        >
            {btnText}
        </button>

    );
};