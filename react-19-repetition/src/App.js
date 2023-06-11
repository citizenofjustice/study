import { useState } from "react";
import PostForm from "./components/PostForm";
import PostList from "./components/PostList";
import "./styles/App.css";
import PostFiler from "./components/PostFilter";
import MyModal from "./components/UI/MyModal/MyModal";
import MyButton from "./components/UI/button/MyButton";
import { usePosts } from "./hooks/usePost";

function App() {
  const [posts, setPosts] = useState([
    { id: 1, title: "Javascript", description: "Event Loop" },
    { id: 2, title: "Python", description: "Neural network" },
    { id: 3, title: "C++", description: "iOS application" },
  ]);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [modal, setModal] = useState(false);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);

  const addNewPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
    setModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={(e) => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm onAddPost={addNewPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFiler filter={filter} setFilter={setFilter} />
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про JS"
      />
    </div>
  );
}

export default App;
