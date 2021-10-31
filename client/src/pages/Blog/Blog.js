import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchMessages } from "../../redux/posts/posts.calls";
import Card from "../../components/Card/Card";

const Blog = () => {
  const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchMessages());
  // }, []);
  return (
    <div>
      <h1>Blog</h1>

    <Card />
    </div>
  );
};

export default Blog;
