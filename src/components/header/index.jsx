import "./style.css";

function Header({title, className}){
    return (
    <header className={ className}>
        <h1>{title}</h1>
    </header>
    );
}
export default Header;