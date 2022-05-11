import "./style.css"
export const Insert  = ({ name, placeholder, className, type, value, onChange }) =>{
    return (
            <input
            name = {name}
            placeholder = {placeholder}
            className={className}
            type={type}
            value={value}
            onChange={onChange}
            />
    );
};
