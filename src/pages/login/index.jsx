import { useState } from "react";
import "./style.css";
import { Insert } from "../../components/inputs";
import { Button } from "../../components/button";
import { LayoutForm } from "../../components/layout";
import { userLogin } from "../../services/data";
import { codeError } from "../../services/errors/error";
import { saveToken } from "../../services/token";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");  

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(email, password)
    .then((response) => {
        if (response.status === 200){
            return response.json();
        }
        codeError(response);
    })
    .then(data => {
      saveToken(data.token);
    })
    
    // redirecionar para a tela de produtos       
    .catch((error) => console.log(error));
    // mostrar os erros caso não consiga bater no fecht
  };


    return <LayoutForm >
        <form  className="login-form">
            <p className="login-form-title">Entrar</p>
            <span className="login-form-title">
                <img src="" alt="Logo do restaurante" />
            </span>
            <article className="login-form-input">
                <label className="label-text" >Email</label>
                <Insert  type= "email" placeholder="user@user.com" value={email}  onChange={(e) => setEmail(e.target.value)} />
                <label className="label-text">Senha</label>
                <Insert  type= "password" placeholder="xxxxxx" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            </article>
            <article className="form-buttom">
                <Button type="submit" btnText="Entrar" btnOnclick={handleSubmit}/>
            </article>
            <article className="redirect-register">
            <p className="redirect-register-text">Não tem uma conta?<a className="redirect-register" href="/Register">Cadastre-se</a></p>               
            </article>
        </form>
    </LayoutForm>;
};

export default Login;