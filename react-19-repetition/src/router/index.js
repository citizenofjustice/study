import About from "../pages/About";
import Error from "../pages/Error";
import Login from "../pages/Login";
import PostIdPage from "../pages/PostIdPage";
import Posts from "../pages/Posts";
import { Navigate } from "react-router-dom";

export const privateRoutes = [
  {
    path: "/",
    component: <Navigate replace to="/posts" />,
  },
  {
    path: "/login",
    component: <Navigate replace to="/posts" />,
  },
  { path: "/about", component: <About /> },
  { path: "/posts", component: <Posts /> },
  { path: "/posts/:id", component: <PostIdPage /> },
  { path: "*", component: <Error /> },
];

export const publicRoutes = [
  {
    path: "/",
    component: <Navigate replace to="/login" />,
  },
  {
    path: "/login",
    component: <Login />,
  },
  {
    path: "*",
    component: <Navigate replace to="/login" />,
  },
];
