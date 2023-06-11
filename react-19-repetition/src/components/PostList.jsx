import { TransitionGroup, CSSTransition } from "react-transition-group";
import PostItem from "./PostItem";

const PostList = (props) => {
  if (!props.posts.length) {
    return <h1 style={{ textAlign: "center" }}>Посты не были найдены!</h1>;
  }
  return (
    <>
      <h1 style={{ textAlign: "center" }}>{props.title}</h1>
      <TransitionGroup>
        {props.posts.map((post, index) => (
          <CSSTransition key={post.id} timeout={500} classNames="post">
            <PostItem
              remove={props.remove}
              number={index + 1}
              key={post.id}
              post={post}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
    </>
  );
};

export default PostList;
