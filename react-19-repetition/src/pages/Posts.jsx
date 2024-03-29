import { useState, useEffect, useRef } from "react";

import { usePosts } from "../hooks/usePost";
import { useFetching } from "../hooks/useFetching";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";
import PostFiler from "../components/PostFilter";
import PostService from "../API/PostService";
import { getPageCount } from "../utils/pages";

import MyModal from "../components/UI/MyModal/MyModal";
import MyButton from "../components/UI/button/MyButton";
import Loader from "../components/UI/Loader/Loader";
import "../styles/App.css";
import Pagination from "../components/UI/pagination/Pagination";
import { useObserver } from "../hooks/useObserver";
import MySelect from "../components/UI/select/MySelect";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [filter, setFilter] = useState({
    sort: "",
    query: "",
  });
  const [modal, setModal] = useState(false);
  const [totalPages, setTotalPages] = useState(0);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const lastElement = useRef();
  const [fetchPosts, isPostLoading, postError] = useFetching(
    async (limit, page) => {
      const response = await PostService.getAll(limit, page);
      setPosts([...posts, ...response.data]);
      const totalCount = response.headers["x-total-count"];
      setTotalPages(getPageCount(totalCount, limit));
    }
  );

  useObserver(lastElement, page < totalPages, isPostLoading, () => {
    setPage((prevPage) => prevPage + 1);
  });

  useEffect(() => {
    fetchPosts(limit, page);
  }, [page, limit]);

  const addNewPost = (post) => {
    setPosts([...posts, { ...post, id: Date.now() }]);
    setModal(false);
  };

  const removePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  const changePage = (page) => {
    setPage(page);
    fetchPosts(limit, page);
  };

  return (
    <div className="App">
      <MyButton style={{ marginTop: "30px" }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
        <PostForm onAddPost={addNewPost} />
      </MyModal>
      <hr style={{ margin: "15px 0" }} />
      <PostFiler filter={filter} setFilter={setFilter} />
      <MySelect
        value={limit}
        onChange={(value) => setLimit(value)}
        defaultValue="Кол-во элементов на странице"
        options={[
          { value: 5, name: "5" },
          { value: 10, name: "10" },
          { value: 25, name: "25" },
          { value: -1, name: "Показать все" },
        ]}
      />
      {postError && <h1>Произошла ошибка ${postError}</h1>}
      {isPostLoading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "50px",
          }}
        >
          <Loader />
        </div>
      )}
      <PostList
        remove={removePost}
        posts={sortedAndSearchedPosts}
        title="Посты про JS"
      />
      <div ref={lastElement} style={{ height: 20, background: "red" }}></div>
      <Pagination totalPages={totalPages} page={page} changePage={changePage} />
    </div>
  );
}

export default Posts;
