import "./style.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { Input } from "../../components/inputs";
import { Button } from "../../components/button";
import { Logo } from "../../components/logo";
import { LayoutForm } from "../../components/layout";
import { createUser } from "../../services/data";
import { codeErrorRegister } from "../../services/errors";
import { saveToken } from "../../services/token";
import ErrorMessages from "../../components/errorMessages";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    createUser(name, email, password, role)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setErrorCode(codeErrorRegister(response));
      })
      .then((data) => {
        saveToken(data.token);
        if (data.role == "atendent") {
          navigate("/Menu");
        } else if (data.role == "kitchen") {
          navigate("/Kitchen");
        } else {
          navigate("/");
        }
      })
      .catch((error) => codeErrorRegister(error));
  };

  return (
    <LayoutForm>
      <form className="register-form">
        <p className="register-form-title">Criar Conta</p>
        <article className="register-form-title">
          <Logo />
        </article>
        <ErrorMessages
          disable={errorCode ? false : true}
          errorMessages={errorCode}
        />

        <article className="register-form-input">
          <label className="label-text">Nome</label>
          <Input
            className="input"
            placeholder="insira seu nome"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <label className="label-text">Email</label>
          <Input
            className="input"
            type="email"
            placeholder="user@user.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label className="label-text">Senha</label>
          <Input
            className="input"
            type="password"
            placeholder="xxxxxx"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </article>
        <article className="register-form-input-role">
          <p className="text-p"> Escolha seu cargo:</p>
          <label>Atendente</label>
          <Input
            className="input-role"
            type="radio"
            value="atendent"
            name="role"
            onChange={(e) => setRole(e.target.value)}
          />
          <label>Cozinha</label>
          <Input
            className="input-role"
            type="radio"
            value="kitchen"
            name="role"
            onChange={(e) => setRole(e.target.value)}
          />
        </article>
        <article className="form-buttom">
          <Button className="btn-register" type="submit" onClick={handleSubmit}>
            Cadastrar
          </Button>
        </article>
        <article className="redirect-register">
          <p className="redirect-register-text">
            Já tem uma conta?
            <Link to="/" className="link">
              Login
            </Link>
          </p>
        </article>
      </form>
    </LayoutForm>
  );
};

export default Register;
