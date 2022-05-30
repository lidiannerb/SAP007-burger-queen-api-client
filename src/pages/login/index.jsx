import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./style.css";
import { Insert } from "../../components/inputs";
import { Button } from "../../components/button";
import { LayoutForm } from "../../components/layout";
import { userLogin } from "../../services/data";
import { codeError } from "../../services/errors";
import { saveToken } from "../../services/token";
import { Logo } from "../../components/logo";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    userLogin(email, password)
      .then((response) => {
        if (response.status === 200) {
          return response.json();
        }
        codeError(response);
      })
      .then((data) => {
        saveToken(data.token);
        if (data.role == "atendent") {
          navigate("/Menu");
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
        <article className="login-form-input">
          <label className="label-text">Email</label>
          <Insert
            type="email"
            placeholder="user@user.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <label className="label-text">Senha</label>
          <Insert
            type="password"
            placeholder="xxxxxx"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </article>
        <article className="form-buttom-login">
          <Button type="submit" onClick={handleSubmit}>
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
