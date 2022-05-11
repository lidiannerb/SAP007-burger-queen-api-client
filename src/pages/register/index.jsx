import { useState } from "react";
import "./style.css"
import { Insert } from "../../components/inputs";
import { Button } from "../../components/button";
import { LayoutForm } from "../../components/layout";

export const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  

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
                <Insert className="input-role" type= "radio" value={role} name="role" onChange={(e) => setRole(e.target.value)}/>
                <label>Cozinha</label>
                <Insert className="input-role" type= "radio" value={role} name="role"  onChange={(e) => setRole(e.target.value)}/>
            </article>
            <article className="form-buttom">
                <Button type="submit" btnText="Cadastrar" />
            </article>
        </form>
    </LayoutForm> 
};