import axios from "axios";
import {
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
} from "./posts.actions";

export const fetchMessages = async (dispatch) => {
  dispatch(fetchPostsRequest);
  try {
    const res = await axios.get("http://localhost:5000/api/messages");
    dispatch(fetchPostsSuccess(res.data));
  } catch (err) {
    dispatch(fetchPostsFailure());
  }
};
