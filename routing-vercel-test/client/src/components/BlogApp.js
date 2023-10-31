import { Link } from "react-router-dom";

const BlogApp = () => {
  const callToPosts = async () => {
    const result = await fetch("http://localhost:3000/blog/posts");
    console.log(result);
  };

  return (
    <div>
      <h1>Blog Index</h1>
      <button onClick={callToPosts}>Click</button>
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
