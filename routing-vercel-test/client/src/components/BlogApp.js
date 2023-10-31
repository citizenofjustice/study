import { Link } from "react-router-dom";

const BlogApp = () => {
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
};

export default BlogApp;
