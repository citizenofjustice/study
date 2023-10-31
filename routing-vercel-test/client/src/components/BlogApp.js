import { Link } from "react-router-dom";

const BlogApp = () => {
  const callToPosts = async () => {
    const result = await fetch("https://study-92pr.vercel.app/blog/posts");
    const text = await result.json();
    console.log(text);
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
