import PostsActionTypes from "./posts.types";

export const fetchPostsRequest = () => ({
  type: PostsActionTypes.FETCH_POSTS_REQUEST,
});

export const fetchPostsSuccess = (posts) => ({
  type: PostsActionTypes.FETCH_POSTS_SUCCESS,
  payload: posts,
});

export const fetchPostsFailure = (errorMessage) => ({
  type: PostsActionTypes.FETCH_POSTS_FAILURE,
  payload: errorMessage,
});

export const addPostRequest = () => ({
  type: PostsActionTypes.ADD_POST_REQUEST,
});

export const addPostSuccess = (post) => ({
  type: PostsActionTypes.ADD_POST_SUCCESS,
  payload: post,
});

export const addPostFailure = (errorMessage) => ({
  type: PostsActionTypes.ADD_POST_FAILURE,
  payload: errorMessage,
});

export const deletePostRequest = () => ({
  type: PostsActionTypes.DELETE_POST_REQUEST,
});

export const deletePostSuccess = (id) => ({
  type: PostsActionTypes.DELETE_POST_SUCCESS,
  payload: id,
});

export const deletePostFailure = (errorMessage) => ({
  type: PostsActionTypes.DELETE_POST_FAILURE,
  payload: errorMessage,
});
