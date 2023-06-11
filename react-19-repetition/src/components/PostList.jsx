import PostItem from "./PostItem";

const PostList = (props) => {
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{props.title}</h1>
      {props.posts.map((post, index) => (
        <PostItem
          remove={props.remove}
          number={index + 1}
          key={post.id}
          post={post}
        />
      ))}
    </>
  );
};

export default PostList;
