import "./reset.css"
import Header from "./components/header";
import { Register } from "./pages/register";


function App() {
  return (
    <>
      <Header 
        title="Hello Component"
        className="vermelho"
      />
      <Header
        title="Bom dia"
        className="amarelo"
      />
      <Register />
    </>
  );
}                     

export default App;
