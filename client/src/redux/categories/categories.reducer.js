import CategoriesActionTypes from "./categories.types";
import { addNewItem, deleteItem } from "../../utils/modifier";

const initialState = {
  data: [],
  isFetching: false,
  errorMessage: null,
  message: null,
};

const categoriesReducer = (state = initialState, action) => {
  switch (action.type) {
    case CategoriesActionTypes.FETCH_CATEGORIES_REQUEST:
    case CategoriesActionTypes.ADD_CATEGORY_REQUEST:
    case CategoriesActionTypes.DELETE_CATEGORY_REQUEST:
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

    case CategoriesActionTypes.ADD_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: addNewItem(state.data, action.payload),
      };

    case CategoriesActionTypes.DELETE_CATEGORY_SUCCESS:
      return {
        ...state,
        isFetching: false,
        data: deleteItem(state.data, action.payload),
      };

    case CategoriesActionTypes.FETCH_CATEGORIES_FAILURE:
    case CategoriesActionTypes.ADD_CATEGORY_FAILURE:
    case CategoriesActionTypes.DELETE_CATEGORY_FAILURE:
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
