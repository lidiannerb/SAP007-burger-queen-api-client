import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";
import { Input } from "../../components/inputs";
import { Button } from "../../components/button";
import { LayoutForm } from "../../components/layout";
import { userLogin } from "../../services/data";
import { codeErrorLogin } from "../../services/errors";
import { saveToken, saveRole } from "../../services/token";
import { Logo } from "../../components/logo";
import ErrorMessages from "../../components/errorMessages";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorCode, setErrorCode] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        setErrorCode(codeErrorLogin(response));
      })
      .then((data) => {
        saveToken(data.token);
        saveRole(data.role);
        if (data.role == "atendent") {
          navigate("/Menu");
        } else if (data.role == "kitchen") {
          navigate("/Kitchen");
        } else {
          navigate("/Register");
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <LayoutForm>
      <form className="login-form">
        <p className="login-form-title">Entrar</p>
        <span className="login-form-title">
          <Logo />
        </span>
        <ErrorMessages
          disable={errorCode ? false : true}
          errorMessages={errorCode}
        />
        <article className="login-form-input">
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
        <article className="form-buttom-login">
          <Button className="btn-register" type="submit" onClick={handleSubmit}>
            Entrar
          </Button>
        </article>
        <article className="redirect-register">
          <p className="redirect-register-text">
            Não tem uma conta?
            <Link to="/Register" className="link">
              Cadastre-se
            </Link>
          </p>
        </article>
      </form>
    </LayoutForm>
  );
};

export default Login;
