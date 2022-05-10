
export const Insert  = ({ name, placeholder, className, type, value, onChange }) =>{
    return (
        <div className="wrap-input">
            <input
            name = {name}
            placeholder = {placeholder}
            className={className}
            type={type}
            value={value}
            onChange={onChange}
            />
    
        </div>
    );
};
