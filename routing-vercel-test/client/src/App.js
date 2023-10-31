import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./Layout";

function Home() {
  return (
    <>
      <h1>Welcome!</h1>
      <p>
        Check out the <Link to="/blog">blog</Link> or the{" "}
        <Link to="users">users</Link> section
      </p>
    </>
  );
}

function BlogApp() {
  return (
    <div>
      <h1>Blog Index</h1>
      <br />
      <Link to="/">Main</Link>
      <br />
      <Link to="/blog/posts">posts</Link>
      <br />
      <Link to="/users">users</Link>
    </div>
  );
}

function UserApp() {
  return (
    <Routes>
      <Route index element={<h1>Users Index</h1>} />
    </Routes>
  );
}

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
