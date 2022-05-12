import { useState } from "react";
import "./style.css"
import { Insert } from "../../components/inputs";
import { Button } from "../../components/button";
import { LayoutForm } from "../../components/layout";
import { createUser } from "../../services/data";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  
  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, email, password, role)
    .then((response) => console.log(response))
    // redirecionar para a tela de produtos       
    .catch((error) => console.log(error))
    // mostrar os erros  
  }


    return <LayoutForm >
        <form  className="register-form">
            <p className="register-form-title">Criar Conta</p>
            <span className="register-form-title">
                <img src="" alt="Logo do restaurante" />
            </span>
            <article className="register-form-input">
                <label className="label-text">Nome</label>
                <Insert  placeholder="insira seu nome" type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label className="label-text" >Email</label>
                <Insert  type= "email" placeholder="user@user.com" value={email}  onChange={(e) => setEmail(e.target.value)} />
                <label className="label-text">Senha</label>
                <Insert  type= "password" placeholder="xxxxxx" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            </article>
            <article className="register-form-input-role">
                <p className="text-p"> Escolha seu cargo:</p>
                <label>Atendente</label>
                <Insert className="input-role" type= "radio" value={role} name="Atendent" onChange={(e) => setRole(e.target.name)}/>
                <label>Cozinha</label>
                <Insert className="input-role" type= "radio" value={role} name="Kitchen"  onChange={(e) => setRole(e.target.name)}/>
            </article>
            <article className="form-buttom">
                <Button type="submit" btnText="Cadastrar" btnOnclick={handleSubmit} />
            </article>
        </form>
    </LayoutForm> 
};

export default Register;