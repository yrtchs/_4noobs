import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMessages } from "../../redux/posts/posts.calls";

const Blog = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages());
  }, []);
  return (
    <div>
      <h1>Blog</h1>
      <p>Lorem ipsum dolor sit amet.</p>
    </div>
  );
};

export default Blog;
