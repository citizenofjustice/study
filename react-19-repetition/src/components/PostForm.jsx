import { useState } from "react";
import MyInput from "./UI/input/MyInput";
import MyButton from "./UI/button/MyButton";

const PostForm = (props) => {
  const [post, setPost] = useState({
    title: "",
    description: "",
  });

  const addNewPostHandler = (e) => {
    e.preventDefault();
    props.onAddPost(post);
    setPost({
      title: "",
      description: "",
    });
  };

  return (
    <>
      <form>
        <MyInput
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
          type="text"
          placeholder="Название поста"
        />
        <MyInput
          value={post.description}
          onChange={(e) => setPost({ ...post, description: e.target.value })}
          type="text"
          placeholder="Описание поста"
        />
        <MyButton onClick={addNewPostHandler}>Создать пост</MyButton>
      </form>
    </>
  );
};

export default PostForm;
