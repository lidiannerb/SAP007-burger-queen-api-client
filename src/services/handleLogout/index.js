import { removeToken } from "../../services/token";
import { useNavigate } from "react-router-dom";

export const handleLogout = () => {
  const navigate = useNavigate();
    removeToken("token");
    navigate("/");
  };
