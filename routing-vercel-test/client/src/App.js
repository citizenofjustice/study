import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";
import { lazy, Suspense } from "react";

const Home = lazy(() => import("./components/Home"));
const BlogApp = lazy(() => import("./components/BlogApp"));
const UserApp = lazy(() => import("./components/UserApp"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h1>Loading</h1>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="blog">
              <Route index element={<BlogApp />} />
              <Route
                path="posts"
                element={
                  <div>
                    <h1>this is posts</h1>
                    <br />
                    <Link to="/">Main</Link>
                  </div>
                }
              />
            </Route>
            <Route path="users" element={<UserApp />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
