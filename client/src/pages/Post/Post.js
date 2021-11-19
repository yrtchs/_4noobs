import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostRequestAsync } from "../../redux/posts/posts.calls";
import Card from "../../components/Card/Card";

const Post = (props) => {
  const dispatch = useDispatch();
  const {
    data: posts,
    errorMessage,
    isFetching,
    message,
  } = useSelector((state) => state.posts);

  useEffect(() => {
    dispatch(fetchPostRequestAsync());
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

export default Post;
