import TagsActionTypes from "./tags.types";

const initialState = {
  data: [],
  isFetching: false,
  errorMessage: null,
  message: null,
};

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case TagsActionTypes.FETCH_TAGS_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case TagsActionTypes.FETCH_TAGS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };

    case TagsActionTypes.FETCH_TAGS_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default tagsReducer;
