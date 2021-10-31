import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchMessages } from "../../redux/posts/posts.calls";

const Messages = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchMessages());
  }, []);

  return <>Messages2</>;
};

export default Messages;
