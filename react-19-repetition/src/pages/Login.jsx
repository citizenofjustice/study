import MyInput from "../components/UI/input/MyInput";

const Login = () => {
  return (
    <div>
      <h1>Авторизация</h1>
      <form>
        <MyInput type="text" placeholder="Введите логин" />
        <MyInput type="password" placeholder="Введите пароль" />
      </form>
    </div>
  );
};

export default Login;
