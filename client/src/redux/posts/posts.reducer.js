import PostsActionTypes from "./posts.types";
import { deleteItem } from "../../utils/modifier";

const initialState = {
  data: [],
  isFetching: false,
  errorMessage: null,
  message: null,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case PostsActionTypes.FETCH_POSTS_REQUEST:
    case PostsActionTypes.ADD_POST_REQUEST:
    case PostsActionTypes.DELETE_POST_REQUEST:
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

    case PostsActionTypes.ADD_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };

    case PostsActionTypes.DELETE_POST_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: deleteItem(state.data, action.payload),
      };

    case PostsActionTypes.FETCH_POSTS_FAILURE:
    case PostsActionTypes.ADD_POST_FAILURE:
    case PostsActionTypes.DELETE_POST_FAILURE:
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
