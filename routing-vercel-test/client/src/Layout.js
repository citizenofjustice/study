import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <h1>NAVBAR</h1>
      <br />
      <br />
      <Outlet />
    </div>
  );
};

export default Layout;
