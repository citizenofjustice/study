import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../../context";

const Navbar = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext);

  const logout = () => {
    setIsAuth(false);
    localStorage.removeItem("auth");
  };

  const links = [
    { path: "/login", title: "Войти", auth: false },
    {
      path: "/logout",
      title: "Выйти",
      auth: true,
      event: logout,
    },
    { path: "/about", title: "О сайте", auth: true },
    { path: "/posts", title: "Посты", auth: true },
  ];

  return (
    <div className="navbar">
      <div className="navbar__links">
        {links.map(
          (link, index) =>
            isAuth === link.auth && (
              <Link
                onClick={link.event}
                style={{ marginLeft: "10px" }}
                key={index}
                to={link.path}
              >
                {link.title}
              </Link>
            )
        )}
      </div>
    </div>
  );
};

export default Navbar;
