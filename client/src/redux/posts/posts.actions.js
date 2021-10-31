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
