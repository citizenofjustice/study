import { Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "../router";
import { useContext } from "react";
import { AuthContext } from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
  const { isAuth, isLoading } = useContext(AuthContext);

  if (isLoading === true) {
    return <Loader />;
  }

  return isAuth ? (
    <Routes>
      {privateRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  ) : (
    <Routes>
      {publicRoutes.map((route, index) => (
        <Route key={index} path={route.path} element={route.component} />
      ))}
    </Routes>
  );
};

export default AppRouter;
