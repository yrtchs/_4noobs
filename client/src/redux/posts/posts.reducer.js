import PostsActionTypes from "./posts.types";

const initialState = {
  data: [],
  isFetching: false,
  errorMessage: null,
  message: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case PostsActionTypes.FETCH_POSTS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };

    case PostsActionTypes.FETCH_POSTS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default postsReducer;
