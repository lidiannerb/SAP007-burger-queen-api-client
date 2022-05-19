import "./style.css";

export function Header({title, className}){
    return (
    <header className={ className}>
        <h1>{title}</h1>
    </header>
    );
}
