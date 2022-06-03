import "./styles.css";

const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

export function SelectTable ({ onChange, value, className }) {
  return (
    <select 
    className={className} 
    value={value} 
    onChange={onChange}
    >  
      <option 
      value="" hidden
      >        
      </option>      
      {tables.map((table) => (
        <option 
        key={table} 
        value={table}
        >
          {table}
        </option>
        ))}
    </select>
  );
}
