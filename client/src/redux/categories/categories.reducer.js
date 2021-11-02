import CategoriesActionTypes from "./categories.types";

const initialState = {
  data: [],
  isFetching: false,
  errorMessage: null,
  message: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_REQUEST:
      return {
        ...state,
        isFetching: true,
      };

    case CategoriesActionTypes.FETCH_CATEGORIES_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: action.payload,
      };

    case CategoriesActionTypes.FETCH_CATEGORIES_FAILURE:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload,
      };

    default:
      return state;
  }
};

export default categoriesReducer;
