import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchMessages } from "../../redux/posts/posts.calls";
import Card from "../../components/Card/Card";
import history from "../../utils/history";

const Blog = (props) => {
  const dispatch = useDispatch();
  const {
    data: posts,
    errorMessage,
    isFetching,
    message,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchMessages());
  }, []);
  return (
    <div>
      <h1>Blog</h1>

      {posts.map((post) => {
        return <Card data={post} key={post.id} />;
      })}
    </div>
  );
};

export default Blog;
