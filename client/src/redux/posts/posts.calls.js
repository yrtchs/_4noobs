import {
  addPostFailure,
  addPostRequest,
  addPostSuccess,
  deletePostFailure,
  deletePostRequest,
  deletePostSuccess,
  fetchPostsFailure,
  fetchPostsRequest,
  fetchPostsSuccess,
} from "./posts.actions";
import { api } from "../../api/api";

export const fetchPostRequestAsync = () => async (dispatch) => {
  dispatch(fetchPostsRequest());
  try {
    const res = await api.get("/posts");
    dispatch(fetchPostsSuccess(res.data));
  } catch (err) {
    dispatch(fetchPostsFailure());
  }
};

export const addPostRequestAsync = (payload) => async (dispatch) => {
  dispatch(addPostRequest());
  try {
    const res = await api.post("/posts", payload);
    dispatch(addPostSuccess(res.data));
  } catch (err) {
    dispatch(addPostFailure(err));
  }
};

export const deletePostRequestAsync = (id) => async (dispatch) => {
  dispatch(deletePostRequest());
  try {
    await api.delete(`/posts/${id}`);
    dispatch(deletePostSuccess(id));
  } catch (err) {
    dispatch(deletePostFailure(err));
  }
};
