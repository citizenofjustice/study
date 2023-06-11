import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript 1", description: "Description" },
    { id: 2, title: "Javascript 2", description: "Description" },
    { id: 3, title: "Javascript 3", description: "Description" },
  ]);

  const addNewPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
  };

  return (
    <div className="App">
      <PostForm onAddPost={addNewPost} />
      <PostList posts={posts} title="Посты про JS" />
    </div>
  );
}

export default App;
