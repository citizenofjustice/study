import { useContext } from "react";
import MyInput from "../components/UI/input/MyInput";
import { AuthContext } from "../context";
import MyButton from "../components/UI/button/MyButton";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);
  const navigate = useNavigate();

  const login = (event) => {
    event.preventDefault();
    setIsAuth(true);
    navigate("/posts");
    localStorage.setItem("auth", "true");
  };

  return (
    <div>
      <h1>Авторизация</h1>
      <form onSubmit={login}>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
        <MyButton>Войти</MyButton>
      </form>
    </div>
  );
};

export default Login;
