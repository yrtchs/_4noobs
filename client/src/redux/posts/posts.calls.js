import {
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
} from "./posts.actions";
import { api } from "../../api/api";

export const fetchMessages = () => async (dispatch) => {
  dispatch(fetchPostsRequest);
  try {
    const res = await api.get("/posts");
    dispatch(fetchPostsSuccess(res.data));
  } catch (err) {
    dispatch(fetchPostsFailure());
  }
};
