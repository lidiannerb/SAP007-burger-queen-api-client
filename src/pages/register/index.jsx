import { useState } from "react";
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
            <Insert className="input-name" placeholder="insira seu nome" type="text" value={name} onChange={(e) => setName(e.target.value)} />
            <Insert className="input-email" type= "email" placeholder="user@user.com" value={email}  onChange={(e) => setEmail(e.target.value)} />
            <Insert  className="input-password" type= "password" placeholder="xxxxxx" value={password}  onChange={(e) => setPassword(e.target.value)}/>
            <label>Atendente</label>
            <Insert className="input-role" type= "radio" value={role} name="role" onChange={(e) => setRole(e.target.value)}/>
            <label>Cozinha</label>
            <Insert className="input-role" type= "radio" value={role} name="role"  onChange={(e) => setRole(e.target.value)}/>
            <Button type="submit" btnText="Cadastrar" />
        </form>
    </LayoutForm> 
};